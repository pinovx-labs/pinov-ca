import { Col, Container, Row } from "react-bootstrap";
import HeadingText from "../../utils/HeadingText";
import { productData } from "../../assets/data/productCardData";
import ProductCard from "./ProductCard";

const OurProducts = () => {
  return (
    <section id="our-products" className="our-products" >
      <Container>
        <Row
        >
          <HeadingText
            text1="OUR"
            text2="PRODUCTS"
            color="#000000"
            align="center"
          />
          {productData.map((productData) => (
            <Col
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
     
              key={productData?.id}
            >
              <ProductCard {...productData} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurProducts;
