import { Col, Container, Row } from "react-bootstrap";
import HeadingText from "../../utils/HeadingText";
import FormComponent from "./FormComponent";
import { useExternalMedia } from "../../hooks/useExternalMedia";


const ContactUs = () => {
  const { contactImg } = useExternalMedia();
console.log();

  const backgroundStyle = {
    backgroundImage: `url(${contactImg})`,
    backgroundSize: "cover",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    minHeight: "300px",
    minWidth: "300px",
  };

  return (
    <section id="contact-us" className="contact-us">
      <Container>
        <Row>
          <HeadingText
            text1="LETS"
            text2="GET CONNECTED"
            color="#273079"
            align="center"
          />
        </Row>
        <Row
          style={{
          }}
        >
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 12, order: 1 }}
            lg={{ span: 6, order: 1 }}
            >
            <FormComponent />
          </Col>

          <Col
            xs={{ span: 12, order: 2 }}
            md={{ span: 12, order: 2 }}
            lg={{ span: 6, order: 2 }}
            style={{
              ...backgroundStyle,
            }}
          ></Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
