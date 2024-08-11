import { TfiFaceSad } from "react-icons/tfi";
import styled from "styled-components";
import { colors } from "../Globalstyled";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 800px;
  margin: 130px 38% 0 38%;
  a {
    text-decoration: none;
    color: ${colors.fontColor_2};
    font-size: 18px;
    margin-left: 135px;
    cursor: pointer;
    border-bottom: 1px solid #888;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 150px;
  color: ${colors.point_1};
  margin-top: 30px;
  span {
    font-size: 140px;
    font-weight: 900;
    margin: 0 50px;
  }
`;

export const PageNotFound = () => {
  return (
    <Container>
      <Text>
        <h3>
          4
          <span>
            <TfiFaceSad />
          </span>
          4
        </h3>
      </Text>
      <Link to={routes.home}>홈페이지로 돌아가기</Link>
    </Container>
  );
};
