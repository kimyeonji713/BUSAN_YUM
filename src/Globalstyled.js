import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  point_1: "#3883FC",
  point_2: "#FFCF3E",
  sub: "#666",
  backsub: "rgba(0, 0, 0, 0.7)",
  fontColor: "#fff",
  fontColor_2: "#888;",
};

export const spacing = {
  side: "120px",
  subside: "100px",
  side_1024: "50px",
  moSide: "30px",
  hamSide: "20px",
};

export const size = {
  size1024: "1024px",
  size768: "768px",
  size435: "435px",
  size368: "368px",
};

export const GlobalStyled = createGlobalStyle`
 ${reset}

*{box-sizing:border-box}


body{
    /* font-family: "Noto Sans KR", sans-serif; */
    font-family: "Jua", sans-serif;
    background-color: #fff;
    /* color: white; */
    
}

ul,li{
    list-style: none;
}

a{
    text-decoration: none;
    color: white;
}

img{
  width: 100%;
  display: block;
}
`;
