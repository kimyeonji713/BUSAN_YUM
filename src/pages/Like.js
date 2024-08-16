import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { colors, size } from "../Globalstyled";
import { IoHeartDislikeOutline } from "react-icons/io5";

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  padding: 100px 0px;
`;
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 50% 22%;
  text-align: center;
  .icon {
    font-size: 60px;
    color: crimson;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: ${size.size435}) {
    .icon {
      font-size: 55px;
      color: crimson;
      margin-bottom: 20px;
    }
    p {
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: ${size.size368}) {
    .icon {
      font-size: 45px;
      color: crimson;
      margin-bottom: 20px;
    }
    p {
      font-size: 12px;
      margin-bottom: 20px;
    }
  }
`;

const Button = styled.button`
  all: unset;
  text-decoration: none;
  width: 150px;
  height: 40px;
  background-color: ${colors.point_2};
  cursor: pointer;
  a {
    color: #fff;
  }
  @media screen and (max-width: ${size.size435}) {
    width: 120px;
    height: 40px;
    a {
      color: #fff;
      font-size: 15px;
    }
  }
  @media screen and (max-width: ${size.size368}) {
    width: 100px;
    height: 40px;
    a {
      color: #fff;
      font-size: 13px;
    }
  }
`;

export const Like = () => {
  return (
    <Container>
      <Header />
      <Wrap>
        <IoHeartDislikeOutline className="icon" />
        <p>로그인 후, 나의 찜 목록을 확인해보세요.</p>
        <Button>
          <Link to={routes.login}>로그인하기</Link>
        </Button>
      </Wrap>
      <Footer />
    </Container>
  );
};
