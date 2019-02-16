import axios from "axios";

const KEY = "AIzaSyAAq8MAnNxKWYWWHqidHuIR5GGY4U9AtM4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

//you can also create a function that would abstract everything
