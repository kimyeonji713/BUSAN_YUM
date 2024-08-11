import styled from "styled-components";
import { colors } from "../../Globalstyled";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  margin: 20px auto;
  background: url(${(props) => props.$BgUrl}) no-repeat center / cover;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8) 40%,
    rgba(180, 180, 180, 0.3) 73%,
    rgba(0, 0, 0, 0.5) 100%
  );

  img {
    width: 80%;
    margin-top: 110px;
    padding: 10px 50px;
  }
`;
const Title = styled.h3`
  text-align: center;
  color: ${colors.point_1};
  margin-top: -50px;
  font-size: 18px;
  font-weight: 900;
  span {
    margin-left: 3px;
    color: ${colors.point_2};
  }
  margin-bottom: 40px;
`;
const Button = styled.button`
  all: unset;
  width: 40%;
  height: 50px;
  background-color: ${colors.point_2};
  text-align: center;
  margin-left: 150px;
  border-radius: 15px;
  opacity: 0.6;
  cursor: pointer;
  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    color: #777;
  }
  &:hover {
    opacity: 1;
  }
`;
export const MainPage = () => {
  const imgUrl = "/img/logo.png";
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        alert("에러 발생");
      }
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container $BgUrl="https://i.pinimg.com/736x/e2/dc/68/e2dc6832ddca8ad95172bb7e444ff1b7.jpg">
          <Wrap>
            <img src={imgUrl} alt="logo" />
            <Title>
              PROTECT YOUR <span>MEMORIES</span>
            </Title>
            <Button>
              <Link to={routes.home}>Let's Go</Link>
            </Button>
          </Wrap>
        </Container>
      )}
    </>
  );
};
