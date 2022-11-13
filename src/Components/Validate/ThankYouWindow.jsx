import React from "react";
import styled from "styled-components";
import thanks from "./media/thanks.svg";
import reasonsCheckbox from "./media/reasons_checkbox.svg";

export default function ThankYouWindow() {
  const thankNote =
    "Your report has been recieved" +
    "\n" +
    "You're making the web a better place!";

  return (
    <>
      <Wrapper>
        <div style={{ weight: 800, marginTop: 65 }}>
          Thank You For Your Report!
        </div>
        <ThankImage src={thanks} />
        <ThankNote>{thankNote}</ThankNote>
        <hr
          style={{
            backgroundColor: "grey",
            width: 515,
            marginLeft: 80,
            marginRight: 80,
            marginTop: 64,
            marginBottom: 45,
          }}
        />
        <span style={{ weight: 600, fontSize: 18 }}>
          {" "}
          <span style={{ weight: 900, fontSize: 24 }}>Most</span> of the users
          think this post is offensive
        </span>
        <span
          style={{
            fontSize: 14,
            marginTop: 32,
            marginLeft: 144,
            marginRight: 144,
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          These are the reasons why more people thought the post is offensive:
        </span>

        <div style={{ display: "flex" }}>
          <img src={reasonsCheckbox} style={{ marginRight: 16 }} />
          <span style={{ fontSize: 14 }}>Minimizing the holocaust</span>
        </div>

        <hr
          style={{
            backgroundColor: "grey",
            width: 515,
            marginLeft: 80,
            marginRight: 80,
            marginTop: 64,
            marginBottom: 45,
          }}
        />

        <span></span>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  width: 675px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  height: 133vh;

  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  align-items: center;
  color: #091430;
`;

const ThankImage = styled.img`
  margin-top: 40px;
  margin-bottom: 16px;
  /* position: absolute;
  left: 42.35%;
  right: 42.35%;
  top: 0%;
  bottom: 49.59%; */
`;

const ThankNote = styled.div`
  width: 327px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  align-items: center;
  text-align: center;
  color: #091430;
`;
