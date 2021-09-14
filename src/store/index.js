import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pictureOfTheDayList: [],
    favoritePictures: [],
  },
  getters: {
    getPictureOfTheDayList(state) {
      return state.pictureOfTheDayList;
    },
    getFavorites(state) {
      return state.favoritePictures;
    },
  },
  mutations: {
    setPictureOfTheDayList(state, payload) {
      state.pictureOfTheDayList = payload;
    },
    addToFavorites(state, url) {
      state.favoritePictures.push(url);
    },
    removeFromFavorites(state, url) {
      const index = state.favoritePictures.findIndex((el) => el.url === url);
      state.favoritePictures.splice(index, 1);
    },
  },
  actions: {
    fetchPicturesOfTheDay: async ({ commit }) => {
      const resp = await api.getPicturesOfTheDayList();
      const picturesList = resp.data.filter((item) => item.media_type === "image").reverse();

      commit("setPictureOfTheDayList", picturesList);
    },
  },
  modules: {},
});
