import styled from "styled-components";
import { useIcons } from "../../hooks/useIcons";






export const ModalIcon = () => {
  const {
    modalCloseIcon
  } = useIcons();

  return (
    <>
      <IconWrapper
        title={"Close"}
      >
        <SVGIcon
          src={modalCloseIcon}
          alt={"Close icon"}
        />
      </IconWrapper>
    </>
  )
};


const IconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  cursor: pointer;
  display: flex;
  align-self: flex-end;
  justify-content: end;
  align-self: end;
`;

const SVGIcon = styled.img`
  width: 100%;
  height: 100%;
`;
