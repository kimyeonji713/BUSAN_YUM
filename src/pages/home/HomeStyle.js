import styled from "styled-components";
import { colors } from "../../Globalstyled";

export const Container = styled.section`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  margin: 100px auto;
`;
export const Wrap = styled.div``;
export const Category = styled.div`
  width: 100%;
  height: 50px;
  background-color: lightgray;
  margin-bottom: 50px;
`;
export const Search = styled.div`
  all: unset;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${colors.point_2};
  border-radius: 15px;
  font-size: 18px;
  font-weight: 700;
  margin: 0px 10px 50px 10px;
  cursor: pointer;
  color: ${colors.fontColor_2};
  a {
    text-decoration: none;
    color: ${colors.fontColor_2};
    opacity: 0.7;
    font-size: 15px;
    font-weight: 600;
  }
`;
export const MainBanner = styled.div`
  width: 100%;
  height: 150px;
  background-color: lightgray;
  margin-bottom: 50px;
`;
export const Notice = styled.div`
  width: 100%;
  height: 200px;
  border-top: 1px solid ${colors.fontColor_2};
  border-bottom: 1px solid ${colors.fontColor_2};
  margin-bottom: 50px;
`;
export const GoWrap = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 70px;
  h3 {
    margin-bottom: 20px;
  }
  .img_1 {
    width: 100%;
    height: 100%;
    background-color: lightgray;
  }
`;
export const KoWrap = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 70px;
  h3 {
    margin-bottom: 20px;
  }
  .img_2 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 70px;

    .img_a {
      width: 33%;
      height: 100%;
      background-color: lightgray;
    }
  }
`;
