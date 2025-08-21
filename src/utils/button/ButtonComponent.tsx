import Button from 'react-bootstrap/Button';
import { IButton } from '../../types/types';
import { Colors } from '../colors/colors';




const ButtonComponent = ({
  text,
  hasIcon,
  style,
  click,
  isLoading,
  cName
}: IButton) => {

  const {
    whiteColor, secondaryColor
  } = Colors();



  return (
    <>
      <Button
        className={`btn-primary ${cName && cName}`}
        variant="primary"
        bsPrefix="btn"
        onClick={click}
        style={{
          backgroundColor: whiteColor,
          border: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 15px",
          color: secondaryColor,
          minWidth: "148px",
          maxWidth: "230px",
          borderRadius: "40px",
          cursor: "pointer",
          fontSize: "1rem",
          fontFamily: "Inter",
          fontWeight: "700",
          gap:"10px",
          textAlign:"center",
          ...style
        }}
        disabled={isLoading}
      >
        {text} {hasIcon && hasIcon}
      </Button>
    </>
  );
}

export default ButtonComponent;

