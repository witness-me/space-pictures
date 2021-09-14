import axios from "axios";

const pictureOfTheDayURL = "https://api.nasa.gov/planetary/apod";
// const searchURL = "https://images-api.nasa.gov/search";

export async function getPicturesOfTheDay(date) {
  return axios.get(pictureOfTheDayURL, {
    params: { start_date: date, api_key: process.env.VUE_APP_API_KEY },
  });
}
