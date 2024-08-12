const fetch = require("node-fetch");

const baseUrl = "https://apis.data.go.kr/1262000/";

const serviceKey =
  "czjc%2FLiXADgQwbo%2BD7wPVIDHrQsrdTly%2FtPY1ISDPgq1b4XfyXD4WryP5J6TNaEsZF9d%2F0%2F10Cto7gia8HcDnA%3D%3D";

const option = "numOfRows=6&pageNo=1";

const url = (urlName) => {
  return baseUrl + `${urlName}?ServiceKey=${serviceKey}&${option}`;
};

export const safeList = () =>
  fetch(url("CountrySafetyService5/getCountrySafetyList5")).then((res) =>
    res.json()
  );

export const safeList_2 = () =>
  fetch(url("CountrySafetyService5/getCountrySafetyList5")).then((res) =>
    res.json()
  );

// notice

const recommendBaseUrl = "http://api.kcisa.kr/openapi/";

const recommendServiceKey = "08b83819-dced-420c-9c0f-0b3906fe803b";

const recommendOption = "&numOfRows=30&pageNo=1";

const recommendOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const url_2 = (urlrecommend) => {
  return (
    recommendBaseUrl +
    `${urlrecommend}?serviceKey=${recommendServiceKey}&${recommendOption}`
  );
};

export const recommendList = () =>
  fetch(url_2("API_CNV_061/request"), recommendOptions).then((res) =>
    res.json()
  );
