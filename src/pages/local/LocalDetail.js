import styled from "styled-components";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { useEffect, useState } from "react";
import { foodList } from "../../api";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  font-family: "Noto Sans KR", sans-serif;
`;
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 10px;
`;

const BannerWrap = styled.div`
  width: 100%;
  height: 350px;
  background-color: #c0d6e8;
  margin-bottom: 30px;
  border-radius: 20px;
  overflow: hidden;
`;
const Banner = styled.div`
  padding: 10px;
`;

const Title = styled.h3``;

const MainMenu = styled.div``;
const Desc = styled.div``;
const Tel = styled.div``;
const Order = styled.div``;

export const LocalDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [foodData, setFoodData] = useState();
  const {
    state: { title },
  } = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const {
          getFoodKr: { item },
        } = await foodList();
        setIsLoading(false);

        // console.log(item);
        setFoodData(item);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(foodData);

  const fooData = foodData?.filter((data) => data.GUGUN_NM === title);
  console.log(fooData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          {/* <PageTitle title={localImg.name} /> */}
          <Header />
          <Wrap>
            {fooData.map((data) => (
              <BannerWrap key={data.UC_SEQ}>
                <img src={data?.MAIN_IMG_NORMAL}></img>
                <Banner>
                  <Title>{data.MAIN_TITLE}</Title>
                  <MainMenu>{data.RPRSNTV_MENU}</MainMenu>
                  <Desc>{data.ITEMCNTNTS}</Desc>
                  <Tel>{data.CNTCT_TEL}</Tel>
                  <Order>{data.USAGE_DAY_WEEK_AND_TIME}</Order>
                </Banner>
              </BannerWrap>
            ))}
          </Wrap>

          {/* <Wrap>{foodData.filter((data) => console.log(data))}</Wrap> */}
          <Footer />
        </Container>
      )}
    </>
  );
};
