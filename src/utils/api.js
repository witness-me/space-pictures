import axios from "axios";

const pictureOfTheDayURL = "https://api.nasa.gov/planetary/apod";
// const searchURL = "https://images-api.nasa.gov/search";

export async function getPicturesOfTheDayList() {
  return axios.get(pictureOfTheDayURL, {
    params: { start_date: "2021-08-05", api_key: process.env.VUE_APP_API_KEY },
  });
}
