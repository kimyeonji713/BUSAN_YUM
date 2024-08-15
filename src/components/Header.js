import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaHamburger, FaRegHeart } from "react-icons/fa";
import { colors, spacing } from "../Globalstyled";
import { IoClose } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const Container = styled.header`
  font-family: "Jua", sans-serif;
  max-width: 500px;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 15px;
  z-index: 10;
  background-color: #fff;
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
    .ham {
      display: none;
      font-family: "Noto Sans KR", sans-serif;
      width: 120px;
      height: 150px;
      background-color: ${colors.point_1};
      display: ${(props) => props.$showAct};
      position: fixed;
      top: 45px;
      right: 0;
      .menu {
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.2);
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      .ham {
        display: block;
      }
    }
  }
`;

const TopWrap = styled.div``;

const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px ${spacing.hamSide};
  color: ${colors.fontColor};
  font-size: 16px;
  font-weight: 700;
  margin-top: 30px;

  a {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.fontColor};
    text-decoration: none;
    border-bottom: 1px solid ${colors.fontColor};
    margin-left: 10px;
    opacity: 0.7;
  }
`;

const Like = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px ${spacing.hamSide};
  color: ${colors.fontColor};
  font-size: 16px;
  font-weight: 700;
  margin-top: 30px;
  padding-bottom: 25px;
  border-bottom: 1px solid ${colors.fontColor};

  a {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.fontColor};
    text-decoration: none;
    border-bottom: 1px solid ${colors.fontColor};
    margin-left: 10px;
    opacity: 0.7;
  }
`;

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollHandler = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    setScrollPosition(scrollPosition);
  });

  return (
    <Container
      className={scrollPosition < 100 ? " " : "active"}
      onScroll={scrollHandler}
    >
      <Wrap>
        <Link to={routes.main}>
          부산<span>YUM</span>
        </Link>
        <button className="hamberger">
          <FaHamburger />
          <div className="ham">
            <div className="menu">
              <TopWrap>
                <Like>
                  <FaRegHeart />
                  <Link to={""}>좋아요</Link>
                </Like>
                <Login>
                  <BsPersonCircle />
                  <Link to={routes.login}>로그인</Link>
                </Login>
              </TopWrap>
            </div>
          </div>
        </button>
      </Wrap>
    </Container>
  );
};
