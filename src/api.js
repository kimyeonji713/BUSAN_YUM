const fetch = require("node-fetch");

const baseUrl = "https://apis.data.go.kr/1262000/";

const serviceKey =
  "czjc%2FLiXADgQwbo%2BD7wPVIDHrQsrdTly%2FtPY1ISDPgq1b4XfyXD4WryP5J6TNaEsZF9d%2F0%2F10Cto7gia8HcDnA%3D%3D";

const option = "numOfRows=5&pageNo=1";

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

const baseUrl_2 = "https://apis.data.go.kr/B551011/KorService1/";

const serviceKey_2 =
  "czjc/LiXADgQwbo+D7wPVIDHrQsrdTly/tPY1ISDPgq1b4XfyXD4WryP5J6TNaEsZF9d/0/10Cto7gia8HcDnA==";

const baseOption =
  "numOfRows=30&pageNo=1&MobileOS=WIN&MobileApp=travelkeeper&_type=json";

const url_2 = (urlName_2) => {
  return baseUrl_2 + `${urlName_2}?ServiceKey=${serviceKey}&${baseOption}`;
};

export const imgList = () =>
  fetch(url_2("detailImage1")).then((res) => res.json());

const imgOption = `numOfRows=30&pageNo=1&MobileOS=WIN&MobileApp=travelkeeper&contentId=${1021339}&_type=json`;
const imgUrl = (urlImg) => {
  return baseUrl_2 + `${urlImg}?ServiceKey=${serviceKey}&${baseOption}`;
};

export const petList = () =>
  fetch(url_2("detailPetTour1")).then((res) => res.json());

export const areaList = () =>
  fetch(url_2("areaBasedList1")).then((res) => res.json());
