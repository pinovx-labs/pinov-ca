import styled from "styled-components";
import "./P.css";
import { IP } from "../../types/types";

const PComponent = styled.p``;

function P({
  textColor,
  text,
  style,
  cName,
  children,
  isAnimatable,
  click,
}: IP) {
  return (
    <>
      <PComponent
        data-aos={isAnimatable ? `fade-up` : ``}
        data-aos-once="true"
        className={`p ${cName}`}
        style={{
          color: textColor,
          cursor: click ? "pointer" : "default",
          ...style,
        }}
        onClick={click}
      >
        {children ? children : null}
        {text ? text : null}
      </PComponent>
    </>
  );
}

export default P;
