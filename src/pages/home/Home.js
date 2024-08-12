import { useEffect, useState } from "react";
import { areaList, petList, safeList_2 } from "../../api";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { routes } from "../../routes";

import {
  Container,
  GoWrap,
  KoWrap,
  MainBanner,
  Notice,
  Search,
  Text,
  Wrap,
} from "./HomeStyle";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useScrollTop } from "../../lib/useScrollTop";
import { Loading } from "../../components/Loading";

export const Home = () => {
  useScrollTop();
  const [safeListData, setSafeListData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [petListData, setPetData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const { data: safeData } = await safeList_2();
        const {
          response: {
            body: {
              items: { item },
            },
          },
        } = await petList();

        console.log(item);

        setSafeListData(safeData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(petListData);

  // console.log(safeListData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Header />
          <Wrap>
            <Search>
              <Link to={routes.search}>어떤 걸 검색하시나요?</Link>
              <FiSearch />
            </Search>
            <MainBanner></MainBanner>
            <Notice>
              <Link to={routes.notice}>
                <h3>Notice📢</h3>
                {safeListData?.map((data) => (
                  <Text key={data?.sfty_notice_id}>{data?.title} ...</Text>
                ))}
                <p className="plus">...</p>
              </Link>
            </Notice>
            <KoWrap>
              <h3>국내는 어떠세요?</h3>
              <div className="img_2">
                <div className="img_a">1</div>
                <div className="img_a">2</div>
                <div className="img_a">3</div>
              </div>
            </KoWrap>
            <GoWrap>
              <h3>반려동물과 함께 떠나시나요?</h3>
              <div className="img_1"></div>
            </GoWrap>
          </Wrap>
          <Footer />
        </Container>
      )}
    </>
  );
};
