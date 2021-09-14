import axios from "axios";

const api = (function () {
  let HTTP = axios.create({
    baseURL: "https://api.nasa.gov/planetary/apod",
  });

  return {
    pictureOfTheDay: {
      getDefaultCollection() {
        // var d = new Date();
        // d.setMonth(d.getMonth() - 1);
        // console.log(d);
        return HTTP.get("", {
          params: { start_date: "2021-08-05", api_key: process.env.VUE_APP_API_KEY },
        });
      },
    },
    // search: {
    //   get_collection(params) {
    //   },
    //   get_resource(id) {
    //   },
    // },
  };
})("vueInstanse");
export const restAPI = {
  install(Vue) {
    Vue.prototype.$api = api;
  },
};
