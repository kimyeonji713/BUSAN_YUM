import styled from "styled-components";
import { colors } from "../Globalstyled";
import { PropagateLoader } from "react-spinners";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Container>
      <PropagateLoader color={colors.point_1} />
    </Container>
  );
};
