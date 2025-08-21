import { Link } from "react-scroll";
import styled from "styled-components";

export default function InternalLinks() {
  const links = [
    { id: 1, url: "about-us", text: "About" },
    { id: 2, url: "our-products", text: "Products" },
    { id: 3, url: "contact-us", text: "Contact Us" },
  ];

  return (
    <div data-aos="fade-up" className="footer-col" data-aos-once="true">
      <LinksWrapper>
        {links.map((link) => (
          <StyledLink
            key={link.id}
            to={link.url}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {link.text}
          </StyledLink>
        ))}
      </LinksWrapper>
    </div>
  );
}

const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }

  @media (min-width: 769px) {
    font-size: 25px;
    line-height: 58px;
  }
`;
