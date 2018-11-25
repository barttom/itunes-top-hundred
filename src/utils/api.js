import axios from "axios";

const API_URL = `https://itunes.apple.com/us/rss/topalbums/limit=100/json`;

export const getData = (callback = () => {}) => {
  axios.get(API_URL).then(({ data }) => callback(data.feed));
};
