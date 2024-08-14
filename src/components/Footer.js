import styled from "styled-components";
import { colors } from "../Globalstyled";
import { Container } from "./Container";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const ConWrap = styled.footer`
  height: 150px;
  border-top: 1px solid #888;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-size: 15px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  background-color: #fff;
  color: #888;
`;

const Git = styled.div`
  a {
    margin-left: 5px;
    cursor: pointer;
    color: #888;
  }
`;

const GoMAin = styled.div`
  margin-top: 20px;
  a {
    text-decoration: none;
    font-size: 15px;
    border-bottom: 1px solid #888;
    cursor: pointer;
    color: #888;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <ConWrap>
        <p>&copy; KimYeonJI 2024</p>
        <br />
        <Git>
          github:
          <a href="https://github.com/kimyeonji713">
            https://github.com/kimyeonji713
          </a>
        </Git>
        <GoMAin>
          <Link to={routes.main}>시작 페이지로 돌아가기</Link>
        </GoMAin>
      </ConWrap>
    </Container>
  );
};
