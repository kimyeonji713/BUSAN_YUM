import styled from "styled-components";

const Wrap = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 20px auto;
`;

export const Container = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};
