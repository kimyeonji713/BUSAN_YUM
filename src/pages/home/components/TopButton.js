import { GrLinkTop } from "react-icons/gr";
import styled from "styled-components";
import { colors, size } from "../../../Globalstyled";

const Topbtn = styled.button`
  all: unset;
  padding: 10px;
  position: fixed;
  bottom: 20px;
  right: 3%;
  font-size: 20px;
  background-color: ${colors.point_2};
  border: none;
  color: #fff;
  cursor: pointer;
  z-index: 10;

  @media screen and (max-width: ${size.size435}) {
    position: fixed;
    bottom: 20px;
    right: 3%;
  }
  @media screen and (max-width: ${size.size368}) {
    position: fixed;
    bottom: 20px;
    right: 3%;
  }
`;

export const TopButton = () => {
  const topHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Topbtn onClick={topHandler}>
      <GrLinkTop />
    </Topbtn>
  );
};
