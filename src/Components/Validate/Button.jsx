import React from "react";
import checkButton from "./media/IconApprove.svg";
import offensiveButton from "./media/Button-cancel.svg";
import styled from "styled-components";

export default function Button({ isOffensive }) {
  return (
    <div
      style={
        isOffensive
          ? { ...buttonStyle, backgroundColor: "#FF5B3C" }
          : { ...buttonStyle }
      }
    >
      <Icon src={isOffensive ? offensiveButton : checkButton} />
      {isOffensive ? (
        <span style={offensiveStyle}>Offensive</span>
      ) : (
        <span style={safeStyle}>Safe</span>
      )}
    </div>
  );
}

const safeStyle = {
  borderRadius: null,
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: 16,
  color: "rgba(109, 209, 166, 1)",
};

const buttonStyle = {
  backgroundColor: "rgba(109, 209, 166, 0.2)",
  borderRadius: 15,
  height: 45,
  width: 162,
  left: 0,
  top: 0,
  gap: 10,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

//left: "calc(50% - 10.5px/2 - 0.15px)",
//top: "calc(50% - 7px/2 - 0.5px)",

const Icon = styled.img`
  width: 20px;
`;

const offensiveStyle = {
  padding: "none",
  borderRadius: null,
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: 16,
  color: "#FFFFFF",
};
