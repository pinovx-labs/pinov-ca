import { ReactNode } from "react";
import { useExport } from "../../hooks/useExport";
import P from "../p/P";
import styled from "styled-components";


type IProps = {
  click?: () => void; // function to call
  textColor: string;
  text: string;
  style?: {};
  cName?: string;
  children?: ReactNode;
  isAnimatable: boolean;
  hasParagraphIcon: boolean;
};

const HeaderParagraph = ({
  textColor,
  text,
  style,
  cName,
  children,
  isAnimatable,
  click,
  hasParagraphIcon,
}: IProps) => {

  const { paragraphIcon } = useExport();

  return (
    <Wrapper>
      {hasParagraphIcon && <img src={paragraphIcon} alt="paragraph icon" />}
      <P
        textColor={textColor}
        children={children}
        text={text}
        style={style}
        cName={cName}
        isAnimatable={isAnimatable}
        click={click}
      />
    </Wrapper>
  );
};

export default HeaderParagraph;

const Wrapper = styled.div`
  display:flex;
  gap:0.25rem
`;
