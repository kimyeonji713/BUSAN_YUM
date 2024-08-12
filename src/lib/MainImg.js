const mImg = [
  {
    id: 0,
    name: "main_1",
    url: `https://i.pinimg.com/736x/e2/dc/68/e2dc6832ddca8ad95172bb7e444ff1b7.jpg`,
    desc: "광안리",
  },
  {
    id: 1,
    name: "main_2",
    url: `https://i.pinimg.com/564x/f4/1c/0b/f41c0b8ab98220f5c2fcf4a76bcf3ced.jpg`,
    desc: "남산타워",
  },
  {
    id: 2,
    name: "main_3",
    url: `https://i.pinimg.com/564x/7a/8f/e8/7a8fe83d5888e2950ed5fd9cfa9cc047.jpg`,
    desc: "경주",
  },
  {
    id: 3,
    name: "main_4",
    url: `https://i.pinimg.com/564x/2d/7e/bd/2d7ebd6c91be99d0ff16f8012d10d031.jpg`,
    desc: "롯데타워",
  },
  {
    id: 4,
    name: "main_5",
    url: `https://i.pinimg.com/564x/eb/db/60/ebdb6034ede5c3d3e7d69c18a801414d.jpg`,
    desc: "경복궁",
  },
];

export const mainImg = () => {
  const number = Math.floor(Math.random() * 5);
  console.log(number);

  const a = mImg[number];

  console.log(a);
  return { a };
};
