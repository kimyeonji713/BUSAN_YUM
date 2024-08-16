import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useScrollTop } from "../lib/useScrollTop";
import { routes } from "../routes";
import { ErrorMessage } from "../components/ErrorMessage";
import styled from "styled-components";
import { colors, size } from "../Globalstyled";

const Container = styled.div`
  max-width: 500px;
  margin: 100px auto;
  width: 100%;
  height: 800px;
  background-color: #f5f7f8;
  padding: 80px 0;
  border-radius: 10px;
`;

const Form = styled.div`
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
    margin-bottom: 10px;
    color: ${colors.sub};
    border-bottom: 1px solid ${colors.sub};
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
    margin: 90px 0 90px 25px;
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

export const SignUp = () => {
  useScrollTop();
  const imgUrl = "/img/logo.png";

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const navi = useNavigate();

  const loginHandler = ({ username, password }) => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("가입 되었습니다 👏🏻😊");
    navi("/signin");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Link to={routes.main}>
          <img src={imgUrl} alt="logo" />
        </Link>

        <input
          {...register("username", {
            required: "아이디를 입력해주세요",
          })}
          type="text"
          placeholder="아이디"
        />
        <ErrorMessage>{errors?.username?.message}</ErrorMessage>

        <input
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
              message: "올바른 이메일 형식을 입력해주세요",
            },
          })}
          type="text"
          placeholder="이메일"
        />
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>

        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요",
            minLength: {
              value: 8,
              message: "8자리 이상 입력해주세요",
            },
          })}
          type="password"
          placeholder="비밀번호"
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>

        <Button $isBtnActive={isValid}>가입</Button>

        <Text>
          이미 회원이신가요?
          <Link to={routes.login}> 로그인</Link>
        </Text>
      </Form>
    </Container>
  );
};
