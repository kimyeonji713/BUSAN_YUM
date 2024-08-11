import { useEffect, useState } from "react";
import { safeList } from "../../api";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { routes } from "../../routes";
import { Link } from "react-router-dom";
import { colors } from "../../Globalstyled";
import {
  Category,
  Container,
  GoWrap,
  KoWrap,
  MainBanner,
  Notice,
  Search,
  Wrap,
} from "./HomeStyle";

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
        <Notice>
          <h3>notice📢</h3>
        </Notice>
        <GoWrap>
          <h3>어디로 떠나시나요?</h3>
          <div className="img_1"></div>
        </GoWrap>
        <KoWrap>
          <h3>국내는 어떠세요?</h3>
          <div className="img_2">
            <div className="img_a">1</div>
            <div className="img_a">2</div>
            <div className="img_a">3</div>
          </div>
        </KoWrap>
      </Wrap>
    </Container>
  );
};
