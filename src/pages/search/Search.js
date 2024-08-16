import styled from "styled-components";
import { colors, size } from "../../Globalstyled";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { searchList } from "../../api";
import { useScrollTop } from "../../lib/useScrollTop";
import { useEffect, useState } from "react";

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  margin: 0px auto;
  background-color: #fff;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 20px;
`;

const Form = styled.form`
  all: unset;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid ${colors.point_2};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  color: lightgray;

  input {
    all: unset;
    font-size: 16px;
    font-weight: 600;
    color: ${colors.fontColor_2};
    &::placeholder {
      font-family: "Noto Sans KR", sans-serif;
      color: #939185;
    }
  }
  button {
    all: unset;
    margin-left: 160px;
    color: ${colors.point_2};
    padding: 5px;
    &:hover {
      border-radius: 5px;
      background-color: rgba(255, 218, 0, 0.5);
      color: #fff;
    }
  }
  @media screen and (max-width: ${size.size435}) {
    width: 90%;
    padding: 15px;

    input {
      all: unset;
      font-size: 16px;
      font-weight: 600;
      color: ${colors.fontColor_2};
      &::placeholder {
        font-family: "Noto Sans KR", sans-serif;
        color: #939185;
        font-size: 16px;
      }
    }
    button {
      all: unset;
      margin-left: 110px;
      color: ${colors.point_2};
      padding: 5px;
      &:hover {
        border-radius: 5px;
        background-color: rgba(255, 218, 0, 0.5);
        color: #fff;
      }
    }
  }
  @media screen and (max-width: ${size.size368}) {
    width: 90%;
    padding: 15px;
    input {
      all: unset;
      font-size: 16px;
      font-weight: 600;
      color: ${colors.fontColor_2};
      &::placeholder {
        font-family: "Noto Sans KR", sans-serif;
        color: #939185;
        font-size: 15px;
      }
    }

    button {
      all: unset;
      margin-left: 50px;
      color: ${colors.point_2};
      padding: 5px;
      &:hover {
        border-radius: 5px;
        background-color: rgba(255, 218, 0, 0.5);
        color: #fff;
      }
    }
  }
`;
export const Search = () => {
  useScrollTop();
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const {
          getFoodKr: { item },
        } = await searchList();

        // console.log(item);
        setSearchData(item);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(searchData);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const onSearchResult = () => {};
  return (
    <Container>
      <Wrap>
        <Header />
        <Form onSubmit={handleSubmit(onSearchResult)}>
          <input
            {...register("keyword", {
              required: "검색어를 입력해주세요.",
            })}
            type="text"
            placeholder="어떤 걸 검색하시나요?"
          ></input>
          <button>
            <FiSearch />
          </button>
          <ErrorMessage></ErrorMessage>
        </Form>
      </Wrap>
      <Footer />
    </Container>
  );
};
