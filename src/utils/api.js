import axios from "axios";

const apiURL = "https://api.nasa.gov/planetary/apod";

export async function getPicturesOfTheDay(date) {
  return axios.get(apiURL, {
    params: { start_date: date, api_key: process.env.VUE_APP_API_KEY },
  });
}
