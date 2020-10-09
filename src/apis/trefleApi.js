import axios from "axios";

export default axios.create({
  baseURL: "http://cors-anywhere.herokuapp.com/https://trefle.io",
  params: {
    token: "_4Q7DBGD5FqZdydDAgn-Vc6A5DXJShEcCvhfEmQd_OY",
  },
});
