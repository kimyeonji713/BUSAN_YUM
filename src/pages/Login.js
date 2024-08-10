import { useForm } from "react-hook-form";
import { useScrollTop } from "../lib/useScrollTop";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { routes } from "../routes";
import styled from "styled-components";

const Contaner = styled.div``;
const Title = styled.div``;
const Form = styled.div``;
const ErrorMessage = styled.div``;
const SignUp = styled.div``;

export const Login = () => {
  useScrollTop();

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
    <Contaner>
      <Title>LOGIN</Title>

      <Form onSumit={handleSubmit(loginHandler)}>
        <h3>로그인</h3>

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
    </Contaner>
  );
};
