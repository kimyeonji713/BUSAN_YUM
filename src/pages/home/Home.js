import { useEffect, useState } from "react";
import { safeList } from "../../api";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { routes } from "../../routes";
import { Link } from "react-router-dom";
import { colors } from "../../Globalstyled";

const Container = styled.section`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  margin: 100px auto;
`;
const Wrap = styled.div``;
const Category = styled.div`
  width: 100%;
  height: 50px;
  background-color: lightgray;
  margin-bottom: 30px;
`;
const Search = styled.div`
  all: unset;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${colors.point_2};
  border-radius: 15px;
  font-size: 18px;
  font-weight: 700;
  margin: 0px 10px;
  cursor: pointer;
  color: ${colors.fontColor_2};
  a {
    text-decoration: none;
    color: ${colors.fontColor_2};

    opacity: 0.7;
    font-size: 15px;
    font-weight: 600;
  }
`;
const MainBanner = styled.div``;
const Notice = styled.div``;
const GoWrap = styled.div``;
const KoWrap = styled.div``;

export const Home = () => {
  const [safeListData, setSafeListData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { data: safeData } = await safeList();

        setSafeListData(safeData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(safeListData);
  return (
    <Container>
      <Wrap>
        <Category></Category>
        <Search>
          <Link to={routes.search}>어떤 걸 검색하시나요?</Link>
          <FiSearch />
        </Search>
        <MainBanner></MainBanner>
        <Notice></Notice>
        <GoWrap>
          <h3>어디로 떠나시나요?</h3>
          <div></div>
        </GoWrap>
        <KoWrap>
          <h3>국내는 어떠세요?</h3>
          <div></div>
        </KoWrap>
      </Wrap>
    </Container>
  );
};
