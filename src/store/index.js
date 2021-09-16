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
      localStorage.setItem("favorites", JSON.stringify(state.favoritePictures));
    },
    removeFromFavorites(state, picture) {
      const index = state.favoritePictures.findIndex((el) => el.url === picture.url);
      state.favoritePictures.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(state.favoritePictures));
    },
    clearFavorites(state) {
      state.favoritePictures = [];
      localStorage.setItem("favorites", JSON.stringify(state.favoritePictures));
    },
    retrieveFavoritesFromLocalStorage(state) {
      state.favoritePictures = JSON.parse(localStorage.getItem("favorites")) || [];
    },
  },
  actions: {
    fetchPicturesOfTheDay: async ({ commit }, date) => {
      commit("setPendingPicturesLoading", true);

      try {
        const resp = await api.getPicturesOfTheDay(date);
        const picturesList = resp.data.filter((item) => item.media_type === "image").reverse();
        commit("setPicturesOfTheDay", picturesList);
      } catch (err) {
        console.log(err);
      } finally {
        commit("setPendingPicturesLoading", false);
      }
    },
  },
  modules: {},
});
