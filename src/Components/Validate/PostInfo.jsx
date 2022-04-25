import React from "react";
import facebookLogo from "./media/facebook_logo.svg";
import TwitterLogo from "./media/Twitter logo.svg";
import styled from "styled-components";

export default function PostInfo({ platform, date }) {
  const info = `Post from: ${platform} | Posted: ${date}`;
  switch (platform) {
    case "facebook":
      return (
        <div style={infoStyle}>
          <Icon src={facebookLogo} />
          <span style={titleStyle}>{info}</span>
        </div>
      );
    case "twitter":
      return (
        <div style={infoStyle}>
          <Icon src={TwitterLogo} />
          <span style={titleStyle}>{info}</span>
        </div>
      );
    case "reddit":
      return (
        <div style={infoStyle}>
          <Icon src={facebookLogo} />
        </div>
      );
    case "instagram":
      return (
        <div style={infoStyle}>
          <Icon src={facebookLogo} />
        </div>
      );
  }
}

const Icon = styled.img`
  width: 24px;
`;

const infoStyle = {
  display: "flex",
};

const titleStyle = {
  height: 17,
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: 14,
  color: "#091430",
  marginLeft: 8,
  marginTop: 4.5,
};
