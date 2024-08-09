import styled from "styled-components";
import { colors } from "../Globalstyled";

const Container = styled.footer`
  /* max-width: 500px;
  width: 100%;
  margin: 20px auto; */
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
`;

export const Footer = () => {
  return (
    <Container>
      <p>&copy; KimYeonJI 2024</p>
      <br />
      <Git>
        <p>github:</p>
        <a href="https://github.com/kimyeonji713">
          https://github.com/kimyeonji713
        </a>
      </Git>
    </Container>
  );
};
