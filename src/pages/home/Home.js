import { useEffect, useState } from "react";
import { safeList } from "../../api";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { Login } from "../Login";

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
  return (
    <Container>
      <Login />
    </Container>
  );
};
