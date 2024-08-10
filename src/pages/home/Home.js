import { useEffect, useState } from "react";
import { safeList } from "../../api";
import styled from "styled-components";
import { Container } from "../../components/Container";

export const Home = () => {
  // const [safeListData, setSafeListData] = useState();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data: safeData } = await safeList();

  //       setSafeListData(safeData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  // console.log(safeListData);
  return <Container>Home</Container>;
};
