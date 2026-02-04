import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";
import { useExternalMedia } from "../../../../hooks/useExternalMedia";
import styled from "styled-components";
import ButtonComponent from "../../../../utils/button/ButtonComponent";
import { Colors } from "../../../../utils/colors/colors";
import { Link, scroller } from "react-scroll";

// Add interface for MobileDropdown props
interface MobileDropdownProps {
  $isOpen: boolean;
}

export default function Header() {
  const { logo } = useExternalMedia();
  const { whiteColor } = Colors();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div className="hero-section">
        <Container>
          <Row>
            <Col>
              <NavBarSection>
                <NavbarMainSectionWrapper>
                  <ImgNavWrapper>
                    <ImgWrapper>
                      <Logo src={logo} alt="logo img" />
                    </ImgWrapper>

                    {/* Desktop Navigation */}
                    <NavbarWrapper className="desktop-nav">
                      <NavItem>
                        <Link
                          to="about-us"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={closeMobileMenu}
                        >
                          About
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link
                          to="our-products"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={closeMobileMenu}
                        >
                          Products{" "}
                        </Link>
                      </NavItem>
                      <NavItem>
                        {" "}
                        <Link
                          to="contact-us"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={closeMobileMenu}
                        >
                          Contact Us
                        </Link>
                      </NavItem>
                    </NavbarWrapper>
                  </ImgNavWrapper>

                  {/* Desktop Button */}
                  <DesktopButton className="desktop-button">
                    <a href="https://pinovx.com" target="_blank">
                      <ButtonComponent
                        bgColor={whiteColor}
                        text={"Discover PinovX"}
                        click={() => {}}
                        isLoading={false}
                        style={{}}
                      />
                    </a>
                  </DesktopButton>

                  {/* Mobile Menu Icon */}
                  <MenuIcon onClick={toggleMenu} className="mobile-menu-icon">
                    {isMenuOpen ? (
                      <CloseIcon>×</CloseIcon>
                    ) : (
                      <HamburgerIcon>
                        <span></span>
                        <span></span>
                        <span></span>
                      </HamburgerIcon>
                    )}
                  </MenuIcon>
                </NavbarMainSectionWrapper>

                {/* Mobile Dropdown Menu */}
                <MobileDropdown $isOpen={isMenuOpen}>
                  <MobileNav>
                    <MobileNavItem onClick={() => setIsMenuOpen(false)}>
                      <Link
                        to="about-us"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={closeMobileMenu}
                      >
                        About Us{" "}
                      </Link>{" "}
                    </MobileNavItem>
                    <MobileNavItem onClick={() => setIsMenuOpen(false)}>
                      <Link
                        to="our-products"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={closeMobileMenu}
                      >
                        Products{" "}
                      </Link>
                    </MobileNavItem>
                    <MobileNavItem onClick={() => setIsMenuOpen(false)}>
                      <Link
                        to="contact-us"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={closeMobileMenu}
                      >
                        Contact Us
                      </Link>{" "}
                    </MobileNavItem>
                    <MobileButtonWrapper>
                      <a href="https://pinovx.com" target="_blank">
                        <ButtonComponent
                          bgColor={whiteColor}
                          text={"Discover PinovX"}
                          click={() => {}}
                          isLoading={false}
                          style={{
                            width: "100%",
                            minWidth: "95%",
                            outline: "none",
                          }}
                        />
                      </a>
                    </MobileButtonWrapper>
                  </MobileNav>
                </MobileDropdown>
              </NavBarSection>

              <HeroTextWrapper>
                <HeroTextTitle>Innovating Beyond Boundaries</HeroTextTitle>
                <HeroTextDescription>
                  Building technology that goes beyond transactions, solutions
                  that inspire trust, spark connection, and make life
                  effortlessly digital.
                </HeroTextDescription>

                <BtnWrapper>
                  <ButtonComponent
                    bgColor={whiteColor}
                    text={"Explore Our Product"}
                    click={() =>
                      scroller.scrollTo("our-products", {
                        duration: 800,
                        delay: 0,
                        smooth: "easeInOutQuart",
                      })
                    }
                    isLoading={false}
                    style={{}}
                  />
                  <ButtonComponent
                    bgColor={"transparent"}
                    text={"Request a Demo"}
                    click={() =>
                      scroller.scrollTo("contact-us", {
                        duration: 800,
                        delay: 0,
                        smooth: "easeInOutQuart",
                      })
                    }
                    isLoading={false}
                    style={{
                      border: "1px solid white",
                      backgroundColor: "transparent",
                      color: whiteColor,
                    }}
                  />
                </BtnWrapper>
              </HeroTextWrapper>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

// Styled Components
const NavBarSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1001;
`;

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 59px;
  width: 370px;
  height: 58px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarMainSectionWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #242424;
  border-radius: 80px;
  padding: 10px 30px;
  margin-top: 60px;
  position: relative;
  z-index: 1000;
`;

const ImgNavWrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DesktopButton = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  span {
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
`;

const CloseIcon = styled.div`
  font-size: 30px;
  color: white;
  font-weight: bold;
  line-height: 1;
`;

// Fixed MobileDropdown with TypeScript interface
const MobileDropdown = styled.div<MobileDropdownProps>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 90%;
  background: #242424;
  border: 1px solid #393939;
  border-radius: 20px;
  padding: 10px;
  margin-top: 10px;
  z-index: 999;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  animation: ${({ $isOpen }) => ($isOpen ? "slideDown 0.3s ease" : "none")};

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MobileNavItem = styled.div`
  color: white;
  font-family: "Inter";
  font-size: 18px;
  font-weight: 500;
  padding: 15px 20px;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #393939;
  }
`;

const MobileButtonWrapper = styled.div`
  margin-top: 20px;
  padding: 0 20px;
  width: 100%;
`;

const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 931px;
  height: auto;
  min-height: 276px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 20px;

  @media (max-width: 768px) {
    top: 60%;
  }
`;

const HeroTextTitle = styled.h1`
  width: 100%;
  max-width: 931px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: clamp(2rem, 5vw, 60px);
  line-height: 1.2;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding: 0 20px;
`;

const HeroTextDescription = styled.div`
  width: 100%;
  max-width: 788px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: clamp(1rem, 2.5vw, 25px);
  line-height: 1.5;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding: 0 20px;
  margin-top: 20px;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;
const NavItem = styled.nav`
  cursor: pointer;

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ccc;
    }
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
