import {type  IFormTextarea } from "../../types/types";
import { Colors } from "../colors/colors";
import P from "../p/P";
import "./Textarea.css";

const TextAreaComponent = ({
  placeholder,
  name,
  cName,
  id,
  onChange,
  style,
  value,
  hasLabel,
  label,
  errorText,
  ...rest
}: IFormTextarea) => {
  const { dangerColor } = Colors();

  return (
    <div className="my-3">
      <div className="d-flex flex-column">
        {hasLabel && <label className="form-label">{label}</label>}

        <textarea
          name={name}
          placeholder={placeholder}
          className={`textarea ${cName}`}
          id={id}
          onChange={onChange}
          style={{
            ...style,
            borderColor: errorText && dangerColor,
          }}
          defaultValue={value}
          {...rest}
          // onBlur={onBlur}
          // ref={ref}
        ></textarea>
      </div>

      {errorText && (
        <P
          textColor={dangerColor}
          text={errorText || ""}
          isAnimatable={false}
          style={{
            margin: 0,
          }}
        />
      )}
    </div>
  );
};

export default TextAreaComponent;
