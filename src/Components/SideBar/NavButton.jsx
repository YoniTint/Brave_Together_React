import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export function NavButton(props) {
  const buttonStyle = {
    height: 56,
    color: "black",
    backgroundColor: "white",
    border: "none",
    fontFamily: "Inter",
    fontWeight: 800,
    textAlign: "left",
    cursor: "pointer",
    transition: "all 0.3s",
  };

  const button = props.button;
  const navigate = useNavigate();
  const location = useLocation();
  const isCurrentURL = location.pathname === button.URL;

  if (isCurrentURL) {
    buttonStyle.color = "#2C63FD";
    buttonStyle.backgroundColor = "#F7F8FC";
  }
  return (
    <button
      style={buttonStyle}
      onClick={() => {
        navigate(button.URL);
      }}
    >
      <img src={button.src} style={imgStyle}/>
      {button.name}
    </button>
  );
  
}


const imgStyle = {
  marginRight: 16,
  marginLeft: 24,
  width: 16,
  position: "relative",
  top: 4,
};

