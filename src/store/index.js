import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pictureOfTheDayList: [],
  },
  getters: {
    getPictureOfTheDayList(state) {
      return state.pictureOfTheDayList;
    },
  },
  mutations: {
    setPictureOfTheDayList(state, payload) {
      state.pictureOfTheDayList = payload;
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
