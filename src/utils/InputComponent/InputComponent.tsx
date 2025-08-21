import styled from "styled-components";
import { Colors } from "../colors/colors";
import P from "../p/P";
import "./Input.css"
import { IFormInput } from "../../types/types";



const InputComponent = ({
  placeholder,
  name,
  type,
  cName,
  id,
  onChange,
  style,
  value,
  hasLabel,
  label,
  errorText,
  icon,
  ...rest
}: IFormInput) => {

  const { dangerColor } = Colors();

  return (
    <InputComponentWrapper>
      <div
      >
        {hasLabel && (<label className="form-label">{label}</label>)}

            <input
              name={name}
              placeholder={placeholder}
              type={type}
              className={`input ${cName} gap-5`}
              id={id}
              onChange={onChange}
              style={{
                ...style,
                borderColor: errorText && dangerColor
              }}
              defaultValue={value}
              {...rest}
              // onBlur={onBlur}
              // ref={ref}
            />
          
      


        {icon && icon}

      </div>

      {errorText && <P
        textColor={dangerColor}
        text={errorText || ""}
        isAnimatable={false}
        style={{
          margin: 0
        }}
      />
      }
    </InputComponentWrapper>
  );
};

export default InputComponent;


const InputComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;