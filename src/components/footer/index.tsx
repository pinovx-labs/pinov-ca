import { Container, Row, Col } from "react-bootstrap";
import ColThree from "./components/ColThree";
import "./footer.css";
import Copyright from "./components/Copyright";
import { useExternalMedia } from "../../hooks/useExternalMedia";
import InternalLinks from "./components/InternalLinks";
import styled from "styled-components";

export default function Footer() {
  const { logo } = useExternalMedia();
  return (
    <>
      <footer
        className="footer"
        id="footer"
        style={{
          backgroundColor: "#000000",
        }}
      >
        <Container>
          <Row className="footer-row">
            <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 4 }}>
              <div
                className="footer-link footer-col"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <Logo src={logo} alt="logo img" />
                <LogoText>Proven in Network of Value</LogoText>
              </div>
            </Col>
            <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 4 }}>
              <InternalLinks />
            </Col>

            <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 4 }}>
              <ColThree />
            </Col>
          </Row>
        </Container>
        <div
          style={{
            backgroundColor: "#1f1f1f",
          }}
        >
          <Container>
            <Row>
              <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }}>
                <Copyright />
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}

const LogoText = styled.p`
  max-width: 376px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
  margin-top: 20px;

  @media (min-width: 769px) {
    font-size: 20px;
    line-height: 39px;
  }
`;

const Logo = styled.img`
  width: 130px;
  height: auto; /* keeps aspect ratio */
  max-width: 100%;

  @media (max-width: 768px) {
    width: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
  }
`;
