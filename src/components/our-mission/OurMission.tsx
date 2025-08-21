import { Col, Container, Row } from "react-bootstrap";
import { useExternalMedia } from "../../hooks/useExternalMedia";
import MissionDescription from "./MissionDescription";

const OurMission = () => {
  const { missionSvg } = useExternalMedia();

  const backgroundStyle = {
    backgroundImage: `url(${missionSvg})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "300px",
    minWidth: "300px",
    marginBottom:"40px"
  };

  return (
    <section id="our-mission" className="our-mission">
      <Container>
        <Row>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 12, order: 1 }}
            lg={{ span: 5, order: 1 }}
            style={{
              ...backgroundStyle,
            }}
          ></Col>

          <Col
            xs={{ span: 12, order: 2 }}
            md={{ span: 12, order: 2 }}
            lg={{ span: 7, order: 2 }}
          >
            <MissionDescription />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurMission;
