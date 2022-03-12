import axios from "axios";

const KEY = "AIzaSyBEDaI6oipJyIYc9suAPZ3QQmYiBI2V9aU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
