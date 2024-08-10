import { useForm } from "react-hook-form";
import { useScrollTop } from "../lib/useScrollTop";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { routes } from "../routes";
import styled from "styled-components";
import { Container } from "../components/Container";
import { colors } from "../Globalstyled";

const Wrap = styled.div`
  background-color: lightgray;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 50%;
    margin-top: 30px;
  }
`;
const Title = styled.h4`
  display: flex;
  justify-content: center;
  transform: translateY(-30px);
  color: ${colors.point_1};
  span {
    margin-left: 10px;
    color: ${colors.point_2};
  }
`;
const Form = styled.div``;
const ErrorMessage = styled.div``;
const SignUp = styled.div``;

export const Login = () => {
  useScrollTop();
  const imgUrl = "/img/logo.png";

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const navi = useNavigate();

  const activeUsername = localStorage.getItem("username");
  const activePassword = localStorage.getItem("password");

  const [isLogin, setIsLogin] = useState();

  const loginHandler = ({ username, password }) => {
    if (activeUsername === username && activePassword === password) {
      alert(`로그인 되었습니다` + { username }`님 환영합니다.`);
    } else {
      setIsLogin("아이디 또는 패스워드를 다시 확인해주세요.");
    }
  };
  return (
    <Container>
      <Wrap>
        <Logo>
          <img src={imgUrl} alt="logo" />
        </Logo>
        <Title>
          PROTECT YOUR <span>MEMORIES</span>
        </Title>

        <Form onSumit={handleSubmit(loginHandler)}>
          <input
            {...register("username", {
              required: "아이디를 입력해주세요.",
            })}
            type="text"
            placeholder="아이디"
          />
          <ErrorMessage>{errors?.username?.message}</ErrorMessage>

          <input
            {...register("password", {
              required: "패스워드를 입력해주세요.",
            })}
            type="text"
            placeholder="패스워드"
          />
          <ErrorMessage>{errors?.password?.message}</ErrorMessage>

          <button>로그인</button>
          <ErrorMessage>{isLogin}</ErrorMessage>

          <SignUp>
            <p>회원이 아니신가요?</p> <Link to={routes.signup}>회원가입</Link>
          </SignUp>
        </Form>
      </Wrap>
    </Container>
  );
};
