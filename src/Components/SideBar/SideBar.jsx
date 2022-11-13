import React from "react";
import Badge from "./Badge";
import feed from "./media/feed.png";
import myActions from "./media/myActions.png";
import FAQ from "./media/FAQ.svg";
import { NavButton } from "./NavButton";

const buttons = [
  { name: "Feed", src: feed, URL: "/" },
  { name: "My Actions", src: myActions, URL: "/actions" },
  { name: "FAQ", src: FAQ, URL: "/FAQ" },
];
export default function SideBar() {
  return (
    <div style={sideBarStyle}>
      <div style={partisanStyle}>PARTISANS</div>
      <Badge />
      <hr style={lineStyle} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        {buttons.map((button) => {
          return <NavButton button={button} />;
        })}
      </div>
    </div>
  );
}

const lineStyle = { width: 210, marginTop: 30, opacity: 0.4 };

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
