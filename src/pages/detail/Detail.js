import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { foodList } from "../../api";
import styled from "styled-components";

const Container = styled.div``;

export const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [foodData, setFoodData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const {
          getFoodKr: { item },
        } = await foodList();

        setFoodData(item);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(foodData);
  return <>{isLoading ? <Loading /> : <Container></Container>}</>;
};
