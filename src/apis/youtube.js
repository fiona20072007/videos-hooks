import axios from "axios";

const KEY = "AIzaSyC8jgVrEIjdyxLOugkJOZKXuVEEsrQXpAw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});

//key: `${KEY}`
