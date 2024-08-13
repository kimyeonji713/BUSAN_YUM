import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { colors, spacing } from "../Globalstyled";
import { IoClose } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const Container = styled.header`
  max-width: 500px;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  z-index: 10;
  &.active {
    padding: 10px;
    width: 100%;

    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: ${colors.point_1};
    font-weight: 700;
    font-size: 25px;
    letter-spacing: 2px;

    span {
      color: ${colors.point_2};
    }
  }

  .hamberger {
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
  }
`;

const Ham = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.$BgUrl}) no-repeat center / cover;
  display: ${(props) => props.$showAct};
  position: fixed;
  top: 0;
  right: 0;
`;

const Menu = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  position: absolute;
  top: 0;
  right: 0;
`;

const TopWrap = styled.div`
  padding: 10px ${spacing.moSideide};
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  a {
    text-decoration: none;
    color: ${colors.point_1};
    font-weight: 700;
    font-size: 40px;
    letter-spacing: 2px;
    margin-left: 160px;

    span {
      color: ${colors.point_2};
    }
  }
  .close {
    padding: 2px 5px;
    color: ${colors.fontColor};
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      border-radius: 5px;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const Login = styled.div`
  margin: 15px 140px 30px 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px ${spacing.hamSide};
  color: ${colors.fontColor};
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;

  a {
    font-size: 16px;
    font-weight: 700;
    color: ${colors.fontColor};
    text-decoration: none;
    border-bottom: 1px solid ${colors.fontColor};
    margin-left: 15px;
    opacity: 0.7;
  }
`;

const SearchBtn = styled.button`
  all: unset;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid ${colors.fontColor};
  border-radius: 15px;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.fontColor};
  margin: 20px 10px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${colors.fontColor};
    opacity: 0.7;
    font-size: 15px;
    font-weight: 600;
  }
`;

export const Header = () => {
  const [show, setShow] = useState(false);
  const imgUrl = "/img/logo.png";

  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollHandler = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    setScrollPosition(scrollPosition);
  });

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

  return (
    <Container
      className={scrollPosition < 100 ? " " : "active"}
      onScroll={scrollHandler}
    >
      <Wrap onClick={closeHandler}>
        <Link to={routes.main}>
          부산<span>YUM</span>
        </Link>
        <button className="hamberger" onClick={showHandler}>
          <FaHamburger />
        </button>

        <Ham
          $BgUrl="https://i.pinimg.com/564x/f4/1c/0b/f41c0b8ab98220f5c2fcf4a76bcf3ced.jpg"
          $showAct={show ? "block" : "none"}
        >
          <Menu>
            <TopWrap>
              <Top>
                <Link to={routes.main}>
                  부산<span>YUM</span>
                </Link>
                <div className="close">
                  <IoClose />
                </div>
              </Top>
              <Login>
                <BsPersonCircle />
                <Link to={routes.login}>회원이신가요?</Link>
              </Login>
            </TopWrap>
            <SearchBtn>
              <Link to={routes.search}>어떤 걸 검색하시나요?</Link>
              <FiSearch />
            </SearchBtn>
          </Menu>
        </Ham>
      </Wrap>
    </Container>
  );
};
