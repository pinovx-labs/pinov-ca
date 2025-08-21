import styled from "styled-components";

type Props = {
  imgSrc: string;
  productTitle: string;
  description: string;
  linkText: string;
  icon?: boolean;
  link?: boolean;
};

const ProductCard = ({
  imgSrc,
  productTitle,
  description,
  linkText,
  icon,
  link,
}: Props) => {
  return (
    <ProductWrapper>
      <ProductTitleMainWrapper data-aos="fade-up" data-aos-once="true">
        <IconWrapper>
          <img
            src={imgSrc}
            alt="img src"
            style={{ maxWidth: "45px", maxHeight: "50px" }}
          />
        </IconWrapper>
        <ProductTitle data-aos="fade-up" data-aos-once="true">
          {productTitle}
        </ProductTitle>
      </ProductTitleMainWrapper>
      <ProductDescription data-aos="fade-up" data-aos-once="true">
        {description}
      </ProductDescription>
      <LinkText data-aos="fade-up" data-aos-once="true">
        <a
          href={link ? "https://pinovx.com" : ""}
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: "#273079",
          }}
        >
          {linkText}
        </a>
        {icon && (
          <img
            src="https://res.cloudinary.com/danxk4ua5/image/upload/v1755602548/arrow-right_o1k8pe.svg"
            alt="arrow"
          />
        )}
      </LinkText>
    </ProductWrapper>
  );
};

export default ProductCard;

const ProductWrapper = styled.div`
  max-width: 400px;
  background: #ffffff;
  box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 1rem auto;

  @media (min-width: 700px) {
    max-width: 580px;
  }
`;

const IconWrapper = styled.div`
  width: 82px;
  height: 82px;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductTitleMainWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const ProductTitle = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 40px;
  letter-spacing: -0.02em;
  color: #273079;
  padding: 0;
  margin: 0;

  @media (min-width: 769px) {
    font-size: 33px;
    line-height: 61px;
  }
`;

const ProductDescription = styled.p`
  max-width: 530px;
  max-height: 305px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 40px;
  letter-spacing: -0.02em;
  color: #000000;

  @media (min-width: 769px) {
    font-size: 25px;
    line-height: 61px;
  }
`;
const LinkText = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 172px;
  height: 61px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 40px;
  letter-spacing: -0.02em;
  color: #273079;
  padding: 0;
  margin: 0;

  @media (min-width: 769px) {
    font-size: 25px;
    line-height: 61px;
  }
`;
