import React from "react";
import facebookLogo from "./media/facebook_logo.svg";
import TwitterLogo from "./media/Twitter logo.svg";
import styled from "styled-components";
import star from "./media/star.svg";
import arrow from "./media/arrow.svg";

export default function PostInfo({ platform, date }) {
  const info = `Post from: ${platform} | Posted: ${dateFormat(
    date,
    "dd MM yyyy"
  )}`;
  var platformImage;
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
      <PlatformIcon src={platformImage} />
      <TitleStyle>{info}</TitleStyle>
      <SideIcons>
        <IconArea>
          <RigthIcon src={arrow} />
        </IconArea>
        <IconArea>
          <RigthIcon src={star} />
        </IconArea>
      </SideIcons>
    </Info>
  );
}

const SideIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
`;

const IconArea = styled.div`
  background-color: #eeeeee;
  border-radius: 20px;
  padding: 4px;
  width: 26px;
  height: 26px;
  margin-left: 8px;
  text-align: center;
`;

const PlatformIcon = styled.img`
  width: 26px;
`;

const RigthIcon = styled.img`
  width: 13px;
  opacity: 0.9;
  color: black;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
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
  text-align: center;
`;

function dateFormat(inputDate, format) {
  const date = new Date(inputDate);

  //extract the parts of the date
  const day = date.getDate();
  const month = getMonthName(date.getMonth()).slice(0,3);
  const year = date.getFullYear();

  //replace the month
  format = format.replace("MM", month.padStart(2, "0"));

  //replace the year
  if (format.indexOf("yyyy") > -1) {
    format = format.replace("yyyy", year.toString());
  } else if (format.indexOf("yy") > -1) {
    format = format.replace("yy", year.toString().substr(2, 2));
  }
  //replace the day
  format = format.replace("dd", day.toString().padStart(2, "0"));

  return format;
}
function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber);

  return date.toLocaleString([], { month: 'long' });
}
