import { useEffect, useState } from "react";
import { foodList } from "../../api";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { routes } from "../../routes";
import {
  Container,
  ConWrap,
  LocalCon,
  LocalWrap,
  Search,
  Text,
  Title,
  Wrap,
} from "./HomeStyle";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useScrollTop } from "../../lib/useScrollTop";
import { Loading } from "../../components/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { TopButton } from "./components/TopButton";
import styled from "styled-components";

const ImgWrap = styled.div`
  img {
    display: block;
    width: 100%;
    height: 280px;
  }
`;

const localImg = [
  {
    id: 0,
    name: "강서구",
    url: `https://search.pstatic.net/common?src=http%3A%2F%2Fdbscthumb.phinf.naver.net%2F2644_000_4%2F20150326080917053_DUUOCAAKR.jpg%2F601b8a11-44c4-4d.jpg%3Ftype%3Dm935_fst_nce&type=f1040_576_domesearchhttps://search.pstatic.net/common?src=http%3A%2F%2Fblogfiles1.naver.net%2F20160323_11%2Fddanji9_14587027911215J1zb_JPEG%2FDSC_7694.jpg&type=f1040_576_domesearch`,
  },
  {
    id: 1,
    name: "사상구",
    url: `https://search.pstatic.net/common?src=http%3A%2F%2Fcafefiles.naver.net%2F20130603_146%2Fsdhjoong_13702174548614bvCc_JPEG%2F1141528431.jpg&type=f1040_576_domesearch`,
  },
  {
    id: 2,
    name: "사하구",
    url: `https://search.pstatic.net/common?src=http%3A%2F%2Fthumb.photo.naver.net%2F20140728_284%2Fhazabi_1406549254760j8Q7R_JPEG%2Fimage.jpg&type=f1040_576_domesearch`,
  },
  {
    id: 3,
    name: "북구",
    url: `https://search.pstatic.net/common?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMThfMjQy%2FMDAxNjQ1MTcyOTE5MDkx.hAhzrsyCdUdCKjrbIUGbhZwNuBQ9y0Z-66eqObDy1Usg.ambQW_gkC2iOCFty3_hDrCToamvG4yRFzIfSbUFiXzog.JPEG.bsbukgusns%2F43596D09-F3CE-4D21-B291-BF6BF78B629F.jpeg%2F2560x1712&type=f1040_576_domesearch`,
  },
  {
    id: 4,
    name: "서구",
    url: `https://search.pstatic.net/common?src=http%3A%2F%2Fblogfiles5.naver.net%2F20100608_65%2Fwxxxw17_1276000008316gqXJ3_jpg%2F49150010_wxxxw17.jpg&type=f1040_576_domesearch`,
  },
  {
    id: 5,
    name: "중구",
    url: `https://search.pstatic.net/common?src=http%3A%2F%2Fthumb.photo.naver.net%2Fexphoto02%2F2009%2F1%2F24%2F78%2Fdsc_1466_ns29.jpg&type=f1040_576_domesearch`,
  },
  {
    id: 6,
    name: "영도구",
    url: `https://search.pstatic.net/common?src=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyNDA3MTBfMjk1%2FMDAxNzIwNTk1NzQ4MTE3.s2wnMi_-P13EaqvftbcyHUuJ3AigLDwgTlgpaF9Qdasg.XTIVX1GsGgU_fKh9Sf5oU3MC-az6lnAe9aRzfRUSjC0g.JPEG%2F%25EC%259D%25B4%25EB%25B2%2588%25EC%2597%2594_%25EC%2598%2581%25EB%258F%2584%2C%25EC%2586%25A1%25EB%258F%2584amp%3B40%3B24amp%3B_41%3B_%25ED%2583%259C%25EC%25A2%2585%25EB%258C%2580_%25EA%25B3%25B5%25EA%25B3%25B5%25EB%2588%2584%25EB%25A6%25AC.jpg%3Ftype%3Dw966&type=f1040_576_domesearch`,
  },
  {
    id: 7,
    name: "부산진구",
    url: `https://search.pstatic.net/common?src=http%3A%2F%2Fblogfiles13.naver.net%2F20150729_195%2Fdael_korea_1438133142447jFcq7_PNG%2F10.png&type=f1040_576_domesearch`,
  },
  {
    id: 8,
    name: "동구",
    url: `https://search.pstatic.net/common?src=http%3A%2F%2Fthumb.photo.naver.net%2Fexphoto02%2F2009%2F2%2F11%2F250%2F%25C6%25C4%25C0%25CF%25BA%25AF%25C8%25AF_p1020824_yjn7113.jpg&type=f1040_576_domesearch`,
  },
  {
    id: 9,
    name: "남구",
    url: `https://search.pstatic.net/common?src=http%3A%2F%2Fthumb.photo.naver.net%2Fexphoto02%2F2009%2F2%2F16%2F294%2Fdsc04076-900_azalia1020.jpg&type=f1040_576_domesearch`,
  },
  {
    id: 10,
    name: "금정구",
    url: `https://search.pstatic.net/common?src=http%3A%2F%2Fblogfiles5.naver.net%2F20130802_91%2Fwonderbugs_1375416561421calv8_JPEG%2F%25C1%25A4%25B9%25FD%25BB%25E71.jpg&type=f1040_576_domesearch`,
  },
  {
    id: 11,
    name: "동래구",
    url: `https://search.pstatic.net/common?src=http%3A%2F%2Fdbscthumb.phinf.naver.net%2F2359_000_1%2F20120229190047206_5JGU3X481.jpg%2Ffb5_899_i1.jpg%3Ftype%3Dm4500_4500_fst_n&type=f1040_576_domesearch`,
  },
  {
    id: 12,
    name: "연제구",
    url: `https://search.pstatic.net/common?src=http%3A%2F%2Fblogfiles5.naver.net%2F20120325_299%2Fdrkimjeongho_1332684548322BnWCY_JPEG%2FDSC_0091.JPG&type=f1040_576_domesearch`,
  },
  {
    id: 13,
    name: "수영구",
    url: `https://search.pstatic.net/common?src=http%3A%2F%2Fthumb.photo.naver.net%2Fexphoto01%2F2010%2F3%2F14%2F273%2Fimg_7044%25B1%25A4%25BE%25C8%25B4%25EB%25B1%25B3_bestbag.jpg&type=f1040_576_domesearch`,
  },
  {
    id: 14,
    name: "해운대구",
    url: `https://search.pstatic.net/common?src=http%3A%2F%2Fthumb.photo.naver.net%2F20130702_252%2Fhwan21562_1372749470555zkM4C_JPEG%2FL1000863.jpg&type=f1040_576_domesearch`,
  },
  {
    id: 15,
    name: "기장군",
    url: `https://search.pstatic.net/common?src=https%3A%2F%2Fpostfiles.pstatic.net%2FMjAyMzA3MTBfMTEw%2FMDAxNjg4OTE5OTgxOTUz.mjvu5m1mc5Smo_ute07ktoSIkWjaHdCB03ED9A_DwxEg.aUkD9TD_gMLE5aqyT1OPcA1aDD8Bjfxe1dE-FZ5k40gg.JPEG.09hs%2FIMG_2575.JPG%3Ftype%3Dw773&type=f1040_576_domesearch`,
  },
];

export const Home = () => {
  useScrollTop();
  const [isLoading, setIsLoading] = useState(false);
  const [foodData, setFoodData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const {
          getFoodKr: { item },
        } = await foodList();

        // console.log(item);
        setFoodData(item);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(foodData);

  const params = {
    slidesPerView: 3.3,
    spaceBetween: 20,
    breakpoints: {
      500: {
        slidesPerView: 3.3,
      },
      430: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
      368: {
        slidesPerView: 2.3,
        spaceBetween: 10,
      },
    },
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Header />
          <Wrap>
            <Search>
              <Link to={routes.search}>어떤 맛집을 찾으시나요?</Link>
              <FiSearch />
            </Search>
            <ConWrap>
              <Swiper
                className="swiper"
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
              >
                {foodData?.map((data, index) => (
                  <SwiperSlide key={data.UC_SEQ}>
                    <ImgWrap>
                      <img src={data.MAIN_IMG_NORMAL} alt="음식"></img>
                      <Text>
                        <h3>올해 추천 Top {index + 1}</h3>
                        <h4>{data.MAIN_TITLE}</h4>
                      </Text>
                    </ImgWrap>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ConWrap>

            <LocalWrap>
              <h3>어디로 가볼까요?</h3>
              <LocalCon>
                <Swiper className="local" {...params}>
                  {localImg?.map((data) => (
                    <SwiperSlide key={data.id}>
                      <Link
                        to={`/local/${data.id}`}
                        state={{ title: data.name }}
                      >
                        <img src={data.url} alt="busan"></img>
                        <Title>
                          <h3>{data.name}</h3>
                        </Title>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </LocalCon>
            </LocalWrap>
          </Wrap>
          <TopButton />
          <Footer />
        </Container>
      )}
    </>
  );
};

<SwiperSlide>
  <Link></Link>
</SwiperSlide>;
