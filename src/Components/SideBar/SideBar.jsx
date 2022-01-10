import React from "react";
import Badge from "./Badge";

export default function SideBar() {
  return (
    <div style={sideBarStyle}>
      <div style={partisanStyle}>PARTISANS</div>
      <Badge />
    </div>
  );
}

const partisanStyle = {
  marginTop: 33,
  marginLeft: 45,
  fontFamily: "Open Sans",
  fontWeight: 800,
  fontSize: 28,
  display: "flex",
  alignItems: "center",
  textTransform: "uppercase",
};
const sideBarStyle = {
  backgroundColor: "white",
  width: 300,
  borderBottomRightRadius: 22,
  borderTopRightRadius: 22,
};
