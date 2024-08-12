import styled from "styled-components";
import { colors } from "../../Globalstyled";

export const Container = styled.section`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  margin: 100px auto;
`;
export const Wrap = styled.div``;

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
  margin: 120px 10px 60px 10px;
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
  height: 320px;
  background-color: lightgray;
  margin-bottom: 60px;
`;
export const Notice = styled.div`
  font-family: "Jua", sans-serif;
  font-weight: 400;
  width: 100%;
  height: 350px;
  border-top: 1px solid ${colors.fontColor_2};
  border-bottom: 1px solid ${colors.fontColor_2};
  margin-bottom: 60px;
  font-size: 20px;

  a {
    text-decoration: none;
    color: ${colors.point_1};
  }
`;

export const Text = styled.p`
  padding: 10px 20px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  border-bottom: 1px solid #888;
  color: #555;
  margin-top: -10px;
`;

export const GoWrap = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 100px;
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
  margin-bottom: 100px;
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
      width: 32%;
      height: 100%;
      background-color: lightgray;
    }
  }
`;
