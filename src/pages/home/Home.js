import { useEffect, useState } from "react";
import { foodList } from "../../api";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { routes } from "../../routes";
import { Container, ConWrap, Search, Text, Wrap } from "./HomeStyle";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useScrollTop } from "../../lib/useScrollTop";
import { Loading } from "../../components/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// SwiperCore.use([Pagination]);

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
  // const params = {
  //   slidesPerView: 6.3,
  //   spaceBetween: 20,
  // };

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
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
              >
                <SwiperSlide>
                  <Link to={routes.detail}>
                    <img
                      src="https://image.ajunews.com/content/image/2018/07/25/20180725142544658121.jpg"
                      alt="한식"
                    ></img>
                    <Text>
                      <h3>한식을 원하시나요?</h3>
                    </Text>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link to={routes.detail}>
                    <img
                      src="https://182951411a04b5d3.kinxzone.com/wp-content/themes/shinhwa/include/img/img_menu_chwihong4.jpg"
                      alt="중식"
                    ></img>
                    <Text>
                      <h3>중식을 원하시나요?</h3>
                    </Text>
                  </Link>
                </SwiperSlide>

                <SwiperSlide className="">
                  <Link to={routes.detail}>
                    <img
                      src="https://rimage.hitosara.com/gg/image/0004031389/0004031389F1.jpg"
                      alt="일식"
                    ></img>
                    <Text>
                      <h3>일식을 원하시나요?</h3>
                    </Text>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link to={routes.detail}>
                    <img
                      src="https://i.pinimg.com/564x/f8/cf/2e/f8cf2ec752acf47596c470a714595f9d.jpg"
                      alt="양식"
                    ></img>
                    <Text>
                      <h3>양식을 원하시나요?</h3>
                    </Text>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </ConWrap>
          </Wrap>
          <Footer />
        </Container>
      )}
    </>
  );
};
