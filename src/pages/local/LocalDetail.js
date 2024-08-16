import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { useEffect, useState } from "react";
import { scrollList } from "../../api";
import { Link, useLocation } from "react-router-dom";
import { TopButton } from "../home/components/TopButton";
import { colors } from "../../Globalstyled";
import { useScrollTop } from "../../lib/useScrollTop";
import InfiniteScroll from "react-infinite-scroll-component";
import { PageTitle } from "../../components/PageTitle";
import { CgMouse } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

const move = keyframes`
0%{
  top: 40px;
      left: 50%;
      transform: translateX(-50%);
}
50%{
  top: 50px;
  
}
100%{
  top: 40px;
  opacity: 0;
}
`;

const move_2 = keyframes`
0%{
  top: 80px;
      left: 50%;
      transform: translateX(-50%);
}
50%{
  top: 90px;
  
}
100%{
  top: 80px;
  opacity: 0;
}
`;

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100%;
  margin: 0px auto;
  position: relative;
`;

const BackBg = styled.div`
  display: ${(props) => props.$showAct};
  width: 100%;
  height: 1000px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  margin: 0px auto;
  z-index: 11;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  .wheel {
    position: absolute;
    bottom: 30%;
    left: 50%;
    transform: translateX(-50%);
    color: #666;
    font-size: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;

    .mouse {
      margin-bottom: 10px;
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
    }
    .down_1 {
      font-size: 40px;
      /* animation: 2s 1s infinite; */
      position: absolute;
      top: 40px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 1;
      animation: ${move} 1s 1s infinite;
    }
    .down_2 {
      font-size: 40px;
      margin-top: -20px;
      position: absolute;
      top: 80px;
      left: 50%;
      transform: translateX(-50%);
      animation: ${move_2} 1s 2s infinite;
    }
  }
`;

const Wrap = styled.div`
  width: 100%;
  background-color: #fff;
  font-family: "Noto Sans KR", sans-serif;
  padding: 100px 15px;
`;

const Category = styled.div`
  width: 120px;
  height: 30px;
  font-size: 25px;
  font-weight: 600;
  color: #ffda78;
  border-bottom: 2px solid #ffda78;
  margin-bottom: 20px;
`;

const BannerWrap = styled.div`
  width: 100%;
  height: 280px;
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

export const LocalDetail = () => {
  useScrollTop();
  const [isLoading, setIsLoading] = useState(true);
  const [scrollData, setScrollData] = useState();
  const [resultData, setResultData] = useState();
  const [show, setShow] = useState(true);
  const {
    state: { title },
  } = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const getFoodKr = await scrollList(1);

        const {
          getFoodKr: { item },
        } = await scrollList(1);
        setScrollData(item);
        setResultData(getFoodKr);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(scrollData);
  // console.log(resultData);
  // console.log(foodData);

  const fooData = scrollData?.filter((data) => data.GUGUN_NM === title);

  const fetchData = async () => {
    try {
      let page = (resultData.getFoodKr.pageNo += 1);
      if (resultData.getFoodKr.pageNo <= resultData.getFoodKr.totalCount) {
        const {
          getFoodKr: { item },
        } = await scrollList(page);
        console.log(page);
        setScrollData(scrollData.concat(item));
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closehandler = () => {
    if (show) {
      setShow(false);
    }
  };
  console.log(show);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <BackBg onClick={closehandler} $showAct={show ? "block" : "none"}>
            <div className="wheel">
              <CgMouse className="mouse" />
              <FaChevronDown className="down_1" />
              <FaChevronDown className="down_2" />
            </div>
          </BackBg>
          <Header />
          <PageTitle title={title} />
          {scrollData && (
            <InfiniteScroll
              dataLength={scrollData.length}
              next={fetchData}
              hasMore={true}
            >
              <Wrap>
                <Category># {title}</Category>
                {fooData.map((data) => (
                  <BannerWrap key={data.UC_SEQ}>
                    <Link
                      to={`/detail/${data.UC_SEQ}`}
                      state={{ id: data.UC_SEQ }}
                    >
                      <img src={data?.MAIN_IMG_NORMAL}></img>
                      <Banner>
                        <Title>{data.MAIN_TITLE}</Title>
                        <MainMenu>{data.RPRSNTV_MENU}</MainMenu>
                      </Banner>
                    </Link>
                  </BannerWrap>
                ))}
              </Wrap>
            </InfiniteScroll>
          )}
          <Footer />

          <TopButton />
        </Container>
      )}
    </>
  );
};
