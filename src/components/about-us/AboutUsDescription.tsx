import styled from "styled-components";
import { useExternalMedia } from "../../hooks/useExternalMedia";
import HeadingText from "../../utils/HeadingText";

const AboutUsDescription = () => {
  const { tick } = useExternalMedia();

  return (
    <MainWrapper>
      <HeadingText text1="WHO" text2="WE ARE" color="#273079" align="start" />

      <DescriptionWrapper  
      data-aos="fade-up"
      data-aos-once="true">
        Pinov is a Canadian digital solutions brand focused on trust,
        innovation, and impact. From fintech to digital branding, we design
        products that connect industries and simplify lives.
      </DescriptionWrapper>

      <FeaturesWrapper 
      data-aos="fade-up"
      data-aos-once="true">
        <Features 
      data-aos="fade-up"
      data-aos-once="true">
          <img
            src={tick}
            alt="tick svg"
            style={{
              height: "24px",
              width: "24px",
            }}
          />
          <p>SIMPLICITY</p>
        </Features>
        <Features>
          <img
            src={tick}
            alt="tick svg"
            style={{
              height: "24px",
              width: "24px",
            }}
          />
          <p>TRUST</p>
        </Features>{" "}
        <Features>
          <img
            src={tick}
            alt="tick svg"
            style={{
              height: "24px",
              width: "24px",
            }}
          />
          <p>INNOVATION</p>
        </Features>
      </FeaturesWrapper>
    </MainWrapper>
  );
};

export default AboutUsDescription;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 57px;
`;

const DescriptionWrapper = styled.div`
  max-width: 669px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 38px;
  letter-spacing: -0.02em;

  color: #000000;

  @media (min-width: 769px) {
    font-size: 30px;
    line-height: 61px;
  }
`;

const Features = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;


  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 12px;
  letter-spacing: -0.02em;

  color: #000000;

  @media (min-width: 769px) {
    font-size: 19px;
  }
`;

const FeaturesWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media (min-width: 769px) {
    gap: 40px;
  }
`;
