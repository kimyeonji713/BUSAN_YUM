import styled from "styled-components";
import { colors } from "../../Globalstyled";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { mainImg, MainImg } from "../../lib/MainImg";

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
`;
const Title = styled.h3`
  font-family: "Jua", sans-serif;
  padding: 120px 20px;
  text-align: center;
  color: ${colors.point_1};
  margin-top: -50px;
  font-size: 60px;
  font-weight: 900;
  span {
    margin-left: 8px;
    color: ${colors.point_2};
  }
  margin-bottom: -20px;
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

const mImg = [
  {
    id: 0,
    name: "main_1",
    url: `https://i.pinimg.com/736x/e2/dc/68/e2dc6832ddca8ad95172bb7e444ff1b7.jpg`,
    desc: "광안리",
  },
  {
    id: 1,
    name: "main_2",
    url: `https://i.pinimg.com/564x/f4/1c/0b/f41c0b8ab98220f5c2fcf4a76bcf3ced.jpg`,
    desc: "남산타워",
  },
  {
    id: 2,
    name: "main_3",
    url: `https://i.pinimg.com/564x/7a/8f/e8/7a8fe83d5888e2950ed5fd9cfa9cc047.jpg`,
    desc: "경주",
  },
  {
    id: 3,
    name: "main_4",
    url: `https://i.pinimg.com/564x/2d/7e/bd/2d7ebd6c91be99d0ff16f8012d10d031.jpg`,
    desc: "롯데타워",
  },
  {
    id: 4,
    name: "main_5",
    url: `https://i.pinimg.com/564x/eb/db/60/ebdb6034ede5c3d3e7d69c18a801414d.jpg`,
    desc: "경복궁",
  },
];
export const MainPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  mainImg();
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

  const number = Math.floor(Math.random() * 5);
  // console.log(number);

  const randomImg = mImg[number];

  // console.log(randomImg);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container $BgUrl={randomImg?.url}>
          <Wrap>
            <Title>
              부산<span>YUM</span>
            </Title>
            <Button>
              <Link to={routes.main}>Let's Go</Link>
            </Button>
          </Wrap>
        </Container>
      )}
    </>
  );
};
