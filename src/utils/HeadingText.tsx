import styled from "styled-components";

type Texts = {
  text1: string;
  text2: string;
  color: string;
  align?: "left" | "right" | "center" | "justify" | "start" | "end";
};
const HeadingText = ({ text1, text2, color, align }: Texts) => {
  return (
    <MainTextWrapper
      style={{
        justifyContent: align,
      }}
      data-aos="fade-up"
      data-aos-once="true"
    >
      <p>{text1} </p>
      <p
        style={{
          color: color,
          fontWeight: 600,
        }}
      >
        {text2}
      </p>
    </MainTextWrapper>
  );
};

export default HeadingText;

const MainTextWrapper = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 40px;
  color: #000000;
  display: flex;
  gap: 10px;
  width: 100%;

  @media (min-width: 769px) {
    font-size: 26px;
    line-height: 58px;
  }
`;
