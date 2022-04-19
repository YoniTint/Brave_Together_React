import React from "react";
import checkButton from "./media/checkButton.svg";
import offensiveButton from "./media/Button-cancel.svg";

export default function Button({ isOffensive }) {
  return (
    <div
      style={
        isOffensive
          ? { ...buttonStyle, backgroundColor: "#FF5B3C" }
          : { ...buttonStyle }
      }
    >
      <img
        style={
          isOffensive
            ? { ...imgStyle, border: "2px solid #FF5B3C" }
            : { ...imgStyle }
        }
        src={isOffensive ? offensiveButton : checkButton}
      />
      {isOffensive ? (
        <span style={offensiveStyle}>Offensive</span>
      ) : (
        <span style={safeStyle}>Safe</span>
      )}
    </div>
  );
}

const safeStyle = {
  height: 22,
  width: 35,
  left: 69,
  top: 16,
  borderRadius: null,
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: 16,
  color: "#FFFFFF",
};

//backgroundColor: rgba(109, 209, 166, 1)
const buttonStyle = {
  backgroundColor: "#29CC97",
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

const imgStyle = {
  backgroundColor: "white",
  width: 20,
  height: 20,
  left: 39,
  top: 17,
  borderRadius: 20,
  padding: "4px,16px,4px,16px",

  border: "2px solid #6DD1A6",
};

const offensiveStyle = {
  padding: "none",
  borderRadius: null,
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: 16,
  color: "#FFFFFF",
};
