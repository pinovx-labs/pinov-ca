import styled from "styled-components";
import HeadingText from "../../utils/HeadingText";

const MissionDescription = () => {
  return (
    <OurMissionWrapper>
      <HeadingText text1="OUR" text2="MISSION" color="#000000" align="end" />
      <MissionStatement 
      data-aos="fade-up"
      data-aos-once="true">
        At Pinov, our mission is to build a Proven Network of Value , a connected ecosystem of digital solutions that people can rely on. We design products that foster trust, security, and impact, empowering individuals and businesses to thrive in a fast-changing digital world.
      </MissionStatement>
    </OurMissionWrapper>
  );
};

export default MissionDescription;

const OurMissionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 57px;
  max-width: 615px;
`;

const MissionStatement = styled.div`
  max-width: 615px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 40px;
  text-align: right;
  letter-spacing: -0.02em;
  color: #000000;
  text-align:end;


  
  @media (min-width: 769px) {
    font-size: 30px;
    line-height: 61px;
  }
`;
