import styled from "styled-components";
import { colors } from "../../Globalstyled";

export const Container = styled.section`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  padding: 120px 0px;
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
  margin: 0 10px 60px 10px;
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

export const ConWrap = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  position: relative;
  margin-bottom: 70px;
  .swiper {
    height: 100%;

    img {
      display: block;
    }
  }
`;

export const Text = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 10%,
    rgba(255, 255, 255, 0) 100%
  );
  position: absolute;
  bottom: 0;
  left: 0;
  h3 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 20px;
    font-weight: 500;
    position: absolute;
    bottom: 50px;
    left: 20px;
    color: #fff;
  }
  h4 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 16px;
    font-weight: 500;
    position: absolute;
    bottom: 25px;
    left: 20px;
    color: #fff;
  }
`;

export const LocalWrap = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  padding: 15px;
  h3 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    color: ${colors.fontColor_2};
  }
  .local {
    width: 250%;

    img {
      display: block;
    }
  }
  margin-bottom: 70px;
`;

export const LocalCon = styled.div`
  width: 100%;
  position: relative;
`;

export const Title = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 10%,
    rgba(255, 255, 255, 0) 100%
  );
  position: absolute;
  bottom: 0;
  left: 0;
  h3 {
    position: absolute;
    bottom: 0;
    left: 20px;
    color: ${colors.fontColor};
  }
`;
