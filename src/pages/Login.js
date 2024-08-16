import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../routes";
import { useForm } from "react-hook-form";
import { colors, size } from "../Globalstyled";
import { ErrorMessage } from "../components/ErrorMessage";
import { useScrollTop } from "../lib/useScrollTop";
import { useState } from "react";

const Container = styled.div`
  max-width: 500px;
  margin: 55px auto;
  width: 100%;
  background-color: #f5f7f8;
  padding: 80px 0;
  border-radius: 10px;
`;

const Form = styled.form`
  img {
    transform: translateX(125px);
    width: 50%;
    margin-bottom: 30px;
  }

  input {
    all: unset;
    width: 85%;
    padding: 10px 20px;
    font-size: 18px;
    background-color: #f5f7f8;
    margin-left: 15px;
    color: ${colors.sub};
    border-bottom: 1px solid ${colors.sub};
  }
  .password {
    margin-top: 15px;
  }
  @media screen and (max-width: ${size.size435}) {
    img {
      transform: translateX(125px);
      width: 45%;
      margin-bottom: 30px;
    }

    input {
      padding: 10px 15px;
      font-size: 16px;
      margin-left: 15px;
    }
  }
  @media screen and (max-width: ${size.size368}) {
    img {
      transform: translateX(115px);
      width: 40%;
      margin-bottom: 30px;
    }

    input {
      padding: 10px;
      font-size: 16px;
      margin-left: 15px;
    }
  }
`;

const Button = styled.button`
  all: unset;
  width: 85%;
  height: 50px;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  margin: 100px 0 100px 25px;
  background-color: ${colors.point_2};
  opacity: ${(props) => (props.$isBtnActive ? "1" : "0.7")};
  cursor: ${(props) => (props.$isBtnActive ? "pointer" : "default")};
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  @media screen and (max-width: ${size.size435}) {
    width: 85%;
    height: 50px;
    padding: 5px 8px;
    margin: 100px 0 100px 25px;
  }
  @media screen and (max-width: ${size.size368}) {
    width: 85%;
    height: 45px;
    padding: 5px;
    margin: 80px 0 80px 25px;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: ${colors.fontColor_2};
  a {
    text-decoration: underline;
    opacity: 0.7;
  }
  @media screen and (max-width: ${size.size435}) {
    font-size: 14px;
  }
  @media screen and (max-width: ${size.size368}) {
    font-size: 13px;
  }
`;

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
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Link to={routes.main}>
          <img src={imgUrl} alt="logo" />
        </Link>

        <input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          type="text"
          placeholder="아이디"
        />
        <ErrorMessage message={errors?.username?.message} />

        <input
          className="password"
          {...register("password", {
            required: "패스워드는 필수 입니다.",
          })}
          type="password"
          placeholder="패스워드"
        />
        <ErrorMessage message={errors?.password?.message} />

        <Button $isBtnActive={isValid}>로그인</Button>
      </Form>

      <Text>
        <p>아이디가 없으신가요?</p>
        <Link to={routes.signup}>회원가입</Link>
      </Text>
    </Container>
  );
};
