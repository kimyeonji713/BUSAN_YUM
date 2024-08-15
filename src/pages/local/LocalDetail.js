import styled from "styled-components";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { useEffect, useState } from "react";
import { foodList, scrollList } from "../../api";
import { Link, useLocation } from "react-router-dom";
import { TopButton } from "../home/components/TopButton";
import { colors } from "../../Globalstyled";

const Container = styled.div``;
const Wrap = styled.div`
  max-width: 500px;
  width: 100%;
  height: 150vh;
  margin: 0px auto;
  background-color: #fff;
  font-family: "Noto Sans KR", sans-serif;
  padding: 100px 15px;
`;

const Category = styled.div`
  width: 100px;
  height: 30px;
  font-size: 25px;
  font-weight: 600;
  color: #ffda78;
  border-bottom: 2px solid #ffda78;
  margin-bottom: 20px;
`;

const BannerWrap = styled.div`
  width: 100%;
  height: 400px;
  background-color: #ffda78;
  margin-bottom: 30px;
  border-radius: 20px;
  overflow: hidden;
`;
const Banner = styled.div`
  padding: 10px;
  color: ${colors.fontColor_3};
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const MainMenu = styled.div`
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 600;
`;
const Desc = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 5px;
  line-height: 16px;
`;
const Tel = styled.div`
  font-size: 156x;
  margin-bottom: 5px;
`;
const Order = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const LocalDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [foodData, setFoodData] = useState();
  const [scrollData, setScrollData] = useState();
  const [resultData, setResultData] = useState();
  const {
    state: { title },
  } = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const {
          getFoodKr: { item },
        } = await foodList();

        // const getFoodKr = await scrollList();
        // setScrollData(getFoodKr);
        // setResultData(getFoodKr.item);

        setFoodData(item);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(scrollData);
  // console.log(foodData);

  const fooData = foodData?.filter((data) => data.GUGUN_NM === title);

  // const fetchData = async () => {
  //   try {
  //     let page = (resultData.page += 1);
  //     if (resultData.page <= resultData.totalCount) {
  //       const {
  //   getFoodKr: { item },
  // } = await scrollList(page);
  //       setScrollData(scrollData.concat(item));
  //     } else {
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Header />
          {/* <PageTitle title={localImg.name} /> */}
          <Wrap>
            <Category># {title}</Category>
            {fooData.map((data) => (
              <BannerWrap key={data.UC_SEQ}>
                <img src={data?.MAIN_IMG_NORMAL}></img>
                <Link to={`/detail/${data.UC_SEQ}`} state={{ id: data.UC_SEQ }}>
                  <Banner>
                    <Title>{data.MAIN_TITLE}</Title>
                    <MainMenu>{data.RPRSNTV_MENU}</MainMenu>
                    <Desc>{data.ITEMCNTNTS}</Desc>
                    <Order>{data.USAGE_DAY_WEEK_AND_TIME}</Order>
                    <Tel>{data.CNTCT_TEL}</Tel>
                  </Banner>
                </Link>
              </BannerWrap>
            ))}
          </Wrap>
          <Footer />

          <TopButton />
        </Container>
      )}
    </>
  );
};
// {scrollData && (
//   <InfiniteScroll
//     dataLength={scrollData.length}
//     next={fetchData}
//     // () 붙이면 렌더링 되기전에 다 나옴 단, 매개변수 사용시에는 붙혀주기
//     hasMore={true}
//   >

//   </InfiniteScroll>
// )}
