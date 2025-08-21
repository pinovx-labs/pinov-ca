import React from "react";

type Props = {
  Icon: React.ElementType;
  link: string;
};

const Icons = ({ Icon, link }: Props) => {
  return (
    <a target="_blank" href={link} rel="noreferrer noopener" hrefLang="en-us">
      <div
        style={{
          background: "#ffffff",
          height: "30px",
          width: "30px",
          borderRadius: "50%",
          color: "#000000",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon
          style={{
            background: "#ffffff",
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            color: "#000000",
            cursor: "pointer",
          }}
        />
      </div>
    </a>
  );
};

export default Icons;
