import React from "react";
import styled from "styled-components";
import thanks from "./media/thanks.svg";

export default function ThankYouWindow() {
  const thankNote =
    "Your report has been recieved" +
    "\n" +
    "You're making the web a better place!";

  return (
    <>
      <Thank>
        Thank You For Your Report!
        <ThankImage src={thanks} />
        <ThankNote>{thankNote}</ThankNote>
        <hr
          style={{
            backgroundColor: "grey",
            width: 515,
            marginLeft: 0,
            marginTop: 64,
            marginBottom: 45,
          }}
        />
      </Thank>
    </>
  );
}

const Thank = styled.div`
  position: absolute;
  width: 323px;
  top: 65px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  align-items: center;
  color: #091430;
`;

const ThankImage = styled.img`
  position: absolute;
  left: 42.35%;
  right: 42.35%;
  top: 0%;
  bottom: 49.59%;
`;

const ThankNote = styled.div`
  position: absolute;
  width: 327px;
  top: 77px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  align-items: center;
  text-align: center;
  color: #091430;
`;
