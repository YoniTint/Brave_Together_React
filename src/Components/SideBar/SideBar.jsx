import React from "react";
import Badge from "./Badge";
import feed from "./media/feed.png";
import myActions from "./media/myActionsLogo.svg";
import FAQ from "./media/faqLogo.svg";
import { NavButton } from "./NavButton";
import styled from "styled-components";

const buttons = [
  { name: "Feed", src: feed, URL: "/" },
  { name: "My Actions", src: myActions, URL: "/actions" },
  { name: "FAQ", src: FAQ, URL: "/FAQ" },
];
export default function SideBar() {
  return (
    <SideBarStyle>
      <div style={{ position: "sticky", top: 33 }}>
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
            return <NavButton button={button} key={button.name} />;
          })}
        </div>
      </div>
    </SideBarStyle>
  );
}

const lineStyle = { width: 210, marginTop: 30, opacity: 0.4 };

const partisanStyle = {
  marginTop: 55,
  marginLeft: 45,
  fontFamily: "Open Sans",
  fontWeight: 800,
  fontSize: 28,
  display: "flex",
  alignItems: "center",
  textTransform: "uppercase",
};

const SideBarStyle = styled.div`
  background: white;
  width: 300;
  borderbottomrightradius: 22;
  bordertoprightradius: 22;
  /* position: sticky;
  top: 0; */
`;
