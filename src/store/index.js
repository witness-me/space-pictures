import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    picturesOfTheDay: [],
    favoritePictures: [],
    pendingPicturesLoading: false,
  },
  getters: {
    getPicturesOfTheDay(state) {
      return state.picturesOfTheDay;
    },
    getFavorites(state) {
      return state.favoritePictures;
    },
    getPendingPicturesLoading(state) {
      return state.pendingPicturesLoading;
    },
  },
  mutations: {
    setPicturesOfTheDay(state, payload) {
      state.picturesOfTheDay = payload;
    },
    setPendingPicturesLoading(state, value) {
      state.pendingPicturesLoading = value;
    },
    addToFavorites(state, picture) {
      state.favoritePictures.push(picture);
    },
    removeFromFavorites(state, picture) {
      const index = state.favoritePictures.findIndex((el) => el.url === picture.url);
      state.favoritePictures.splice(index, 1);
    },
    clearFavorites(state) {
      state.favoritePictures = [];
    },
  },
  actions: {
    fetchPicturesOfTheDay: async ({ commit }, date) => {
      commit("setPendingPicturesLoading", true);

      const resp = await api.getPicturesOfTheDay(date);
      const picturesList = resp.data.filter((item) => item.media_type === "image").reverse();

      commit("setPicturesOfTheDay", picturesList);
      commit("setPendingPicturesLoading", false);
    },
  },
  modules: {},
});
