import React, { useState } from "react";
import checkSafeButton from "./media/IconApprove.svg";
import checkOffensiveButton from "./media/IconOffensive.svg";
import styled from "styled-components";
import postReportSafe from "../Hooks/postReportSafe";

export default function Button({
  isOffensive,
  setOffensivePost,
    postData,
    userId
}) {
  return (
    <div
      style={
        isOffensive
          ? { ...buttonStyle, backgroundColor: "rgba(241, 43, 44, 0.2)" }
          : { ...buttonStyle }
      }
    >
      <Icon src={isOffensive ? checkOffensiveButton : checkSafeButton} />

      {isOffensive ? (
        <span
          onClick={() => {
            setOffensivePost(postData);
          }}
          style={offensiveStyle}
        >
          Offensive
        </span>
      ) : (
        <span
          onClick={() => {
              postReportSafe(postData, userId)
          }}
          style={safeStyle}
        >
          Safe
        </span>
      )}
    </div>
  );
}

const safeStyle = {
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: 16,
  color: "rgba(109, 209, 166, 1)",
};

const offensiveStyle = {
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: 16,
  color: "rgba(241, 43, 44,1)",
};

const buttonStyle = {
  backgroundColor: "rgba(109, 209, 166, 0.2)",
  borderRadius: 15,
  height: 45,
  width: 162,
  gap: 10,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};
const Icon = styled.img`
  width: 20px;
`;
//left: "calc(50% - 10.5px/2 - 0.15px)",
//top: "calc(50% - 7px/2 - 0.5px)",
