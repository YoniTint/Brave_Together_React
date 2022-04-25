import React from "react";
import Button from "./Button";
import styled from "styled-components";

export default function ValidateCard() {
  return (
    <Wrapper>
      <Temp></Temp>
      <DecisionButton>
        <Button isOffensive={false}/>
        <Button isOffensive={true} />
      </DecisionButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 694px;
  width: 499px;
  border-radius: 25px;
  padding: 24px;
  background-color: white;
`;

const DecisionButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const Temp = styled.div`
height: 336px;
width: 451px;
margin-top: 12.78%;
border-radius: 10px;
background-color: black;
`;
