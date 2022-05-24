import React from "react";
import facebookLogo from "./media/facebook_logo.svg";
import TwitterLogo from "./media/Twitter logo.svg";
import styled from "styled-components";
import star from "./media/star.svg";
import arrow from "./media/arrow.svg";

export default function PostInfo({ platform, date }) {
  const info = `Post from: ${platform} | Posted: ${date}`;
  let platformImage = null;
  switch (platform) {
    case "facebook":
      platformImage = facebookLogo;
      break;
    case "twitter":
      platformImage = TwitterLogo;
      break;
    case "reddit":
      platformImage = null;
      break;
    case "instagram":
      platformImage = null;
  }
  return (
    <Info>
      <Icon src={platformImage} />
      <TitleStyle>{info}</TitleStyle>
      <SideIcon src={arrow} />
      <Icon src={star} />
    </Info>
  );
}

const SideIcon = styled.img`
  background-color: #eeeeee;
  border-radius: 20px;
  padding: 4px;
  height: 26px;
  width: 26px;
  margin-left: auto;
`;

const Icon = styled.img`
  background-color: #eeeeee;
  border-radius: 20px;
  padding: 4px;
  width: 26px;
  height: 26px;
`;

const Info = styled.div`
  display: flex;
`;

const TitleStyle = styled.span`
  height: 17px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #091430;
  margin-left: 8px;
  margin-top: 4.5px;
`;
