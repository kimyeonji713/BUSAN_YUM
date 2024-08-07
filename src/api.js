const fetch = require("node-fetch");

const baseUrl = "https://apis.data.go.kr/1262000/";

const ServiceKey =
  "czjc%2FLiXADgQwbo%2BD7wPVIDHrQsrdTly%2FtPY1ISDPgq1b4XfyXD4WryP5J6TNaEsZF9d%2F0%2F10Cto7gia8HcDnA%3D%3D";

const option = "numOfRows=20&pageNo=1";

const url = (urlName) => {
  return baseUrl + `${urlName}?ServiceKey=${ServiceKey}&${option}`;
};

export const safeList = () =>
  fetch(url("CountrySafetyService5/getCountrySafetyList5")).then((res) =>
    res.json()
  );
