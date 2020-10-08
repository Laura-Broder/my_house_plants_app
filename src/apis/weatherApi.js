import axios from "axios";

export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/onecall",
  params: {
    appid: "da8def9c2ced5dc8a3bc3a8e81ad2333",
    units: "metric",
    exclude: "current,minutely,hourly,alerts",
  },
});

// "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=da8def9c2ced5dc8a3bc3a8e81ad2333"
