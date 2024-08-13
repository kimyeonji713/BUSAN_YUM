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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 55%;
    margin-top: -400px;
  }
`;

const Title = styled.h3`
  font-family: "Jua", sans-serif;
  padding: 120px 20px;
  text-align: center;
  color: ${colors.point_1};
  margin-top: -130px;
  font-size: 35px;
  font-weight: 900;
  span {
    margin-left: 5px;
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
  margin-top: -60px;
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
    url: `https://i.pinimg.com/564x/76/06/80/7606809eb55d981989fb1b437670db1d.jpg`,
    desc: "청사포",
  },
  {
    id: 2,
    name: "main_3",
    url: `https://i.pinimg.com/736x/b0/1c/c2/b01cc272de345db4a008c66e47c3133e.jpg`,
    desc: "마린시티",
  },
  {
    id: 3,
    name: "main_4",
    url: `https://i.pinimg.com/564x/52/b9/06/52b9067df275461f7db6ee7115899625.jpg`,
    desc: "감천문화마을",
  },
  {
    id: 4,
    name: "main_5",
    url: `https://i.pinimg.com/564x/df/2d/89/df2d89183f13f6f8ad1fb402baa430d8.jpg`,
    desc: "부기",
  },
];
export const MainPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const imgUrl = "/img/logo.png";

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
            <img src={imgUrl} alt="logo"></img>
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
