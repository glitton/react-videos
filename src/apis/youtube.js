import axios from "axios";

const KEY = "AIzaSyDb-2NbSmE7NkH-udlfbQGPo00EeF15Dq0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
