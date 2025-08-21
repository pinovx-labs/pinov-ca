import { Col, Container, Row } from "react-bootstrap";
import { useExternalMedia } from "../../hooks/useExternalMedia";
import AboutUsDescription from "./AboutUsDescription";
export default function AboutUs() {
  const { pinovxMobile } = useExternalMedia();

  const backgroundStyle = {
    backgroundImage: `url(${pinovxMobile})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "300px",
    minWidth: "300px",

    marginBottom: "40px",
  };

  return (
    <section id="about-us" className="about-us">
      <Container>
        <Row>
          <Col
            xs={{ span: 12, order: 2 }}
            md={{ span: 12, order: 2 }}
            lg={{ span: 7, order: 1 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AboutUsDescription />
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 12, order: 1 }}
            lg={{ span: 5, order: 2 }}
            style={{
              ...backgroundStyle,
            }}
          ></Col>
        </Row>
      </Container>
    </section>
  );
}
