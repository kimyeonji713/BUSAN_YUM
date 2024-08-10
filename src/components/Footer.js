import styled from "styled-components";
import { colors } from "../Globalstyled";
import { Container } from "./Container";

const ConWrap = styled.footer`
  height: 150px;
  border-top: 1px solid ${colors.sub};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
  text-align: center;
  font-size: 15px;
`;

const Git = styled.div`
  display: flex;
  a {
    margin-left: 5px;
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
      </ConWrap>
    </Container>
  );
};
