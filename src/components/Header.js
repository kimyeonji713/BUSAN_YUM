import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useRef, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { FaHamburger } from "react-icons/fa";
import { colors } from "../Globalstyled";

const Container = styled.header`
  max-width: 500px;
  width: 100%;
  height: 80px;
  margin: 20px auto;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 30%;
  }
`;

const Button = styled.button`
  background-color: #fff;
  border: none;
  color: ${colors.point_1};
  font-size: 20px;
  padding: 5px 8px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Ham = styled.div``;

const Menu = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: lightblue;
  display: none;
`;

export const Header = () => {
  const { isOpen, onOpen, onClose } = useState();
  const [show, setShow] = useState(false);
  const btnRef = useRef();
  const imgUrl = "/img/logo.png";
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const showHandler = () => {
    if (!show) {
      setShow(true);
    }
  };
  const closeHandler = () => {
    if (show) {
      setShow(false);
    }
  };
  const onSearchResult = () => {};
  return (
    <Container>
      <Wrap>
        <Link to={routes.home}>
          <img src={imgUrl} alt="logo" />
        </Link>
        <Button>
          <FaHamburger />
        </Button>

        <Ham onClick={showHandler}>
          <Menu $showAct={show ? "block" : "none"}>
            <Link to="">회원이신가요?</Link>

            <form onSubmit={handleSubmit(onSearchResult)}>
              <input
                {...register("keyword", { required: "검색어를 입력해주세요." })}
                type="text"
                placeholder="검색어를 입력해주세요."
              ></input>
            </form>
          </Menu>
        </Ham>
      </Wrap>
    </Container>
  );
};
