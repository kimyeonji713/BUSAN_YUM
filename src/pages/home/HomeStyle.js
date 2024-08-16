import styled from "styled-components";
import { colors, size } from "../../Globalstyled";

export const Container = styled.section`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  padding: 100px 0px;
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
    font-family: "Noto Sans KR", sans-serif;
    text-decoration: none;
    color: ${colors.fontColor_2};
    opacity: 0.7;
    font-size: 15px;
    font-weight: 600;
  }

  @media screen and (max-width: ${size.size435}) {
    width: 88%;
  }
  @media screen and (max-width: ${size.size368}) {
    width: 86%;
    a {
      font-family: "Noto Sans KR", sans-serif;
      text-decoration: none;
      color: ${colors.fontColor_2};
      opacity: 0.7;
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

export const ConWrap = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
  margin-bottom: 70px;
  .swiper {
    height: 100%;
  }
  @media screen and (max-width: ${size.size435}) {
    height: 230px;
  }
  @media screen and (max-width: ${size.size368}) {
    height: 210px;
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
  @media screen and (max-width: ${size.size435}) {
    h3 {
      bottom: 63px;
      left: 20px;
    }
    h4 {
      bottom: 38px;
      left: 20px;
    }
  }
  @media screen and (max-width: ${size.size368}) {
    h3 {
      font-size: 18px;
      bottom: 60px;
      left: 20px;
    }
    h4 {
      font-size: 15px;
      bottom: 35px;
      left: 20px;
    }
  }
`;

export const LocalWrap = styled.div`
  width: 100%;
  height: 280px;
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
  @media screen and (max-width: ${size.size435}) {
    padding: 12px;
    h3 {
      font-size: 20px;
    }
  }
  @media screen and (max-width: ${size.size368}) {
    padding: 12px;
    h3 {
      font-size: 19px;
    }
  }
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
  @media screen and (max-width: ${size.size435}) {
    padding: 12px;
    h3 {
      left: 15px;
    }
  }
  @media screen and (max-width: ${size.size368}) {
    padding: 12px;
    h3 {
      left: 15px;
    }
  }
`;
