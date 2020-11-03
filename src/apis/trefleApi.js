import axios from "axios";

export default axios.create({
  baseURL: "https://trefle.io",
  params: {
    token: "_4Q7DBGD5FqZdydDAgn-Vc6A5DXJShEcCvhfEmQd_OY",
  },
});
// _4Q7DBGD5FqZdydDAgn-Vc6A5DXJShEcCvhfEmQd_OY
// https://thingproxy.freeboard.io/fetch/
// https://trefle.io/api/v1/plants/search?token=_4Q7DBGD5FqZdydDAgn-Vc6A5DXJShEcCvhfEmQd_OY&page=2&q=rose
// http://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?token=_4Q7DBGD5FqZdydDAgn-Vc6A5DXJShEcCvhfEmQd_OY&q=rose
