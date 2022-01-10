import React from "react";
import captainBadge from "./media/captainBadge.png";
export default function Badge() {
  const userName = "moshe";
  const rank = "captain";
  const sumReportsOfUser = 24;

  return (
    <div style={cardStyle}>
      <div>Welcome back, {userName}!</div>
      <div style={{ display: "flex" }}>
        <img
          style={imgStyle}
          width="31px"
          height="35px"
          alt="captain"
          src={captainBadge}
        ></img>
        <div>
          {" "}
          <div style={rankStyle}> you're a {rank} </div>
          <div> {sumReportsOfUser} reports</div>
        </div>
      </div>
    </div>
  );
}

const imgStyle = {
  width: 31,
  height: 35,
  marginTop: 17,
  marginRight: 12,
};
const cardStyle = {
  textAlign: "left",
  marginTop: 48,
  marginLeft: 45,
  width: 202,
  height: 74,
};
const rankStyle = {
  marginTop: 8,
};
