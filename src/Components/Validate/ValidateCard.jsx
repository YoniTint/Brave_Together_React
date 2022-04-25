import React from "react";
import Button from "./Button";
import styled from "styled-components";
import PostInfo from "./PostInfo";
import ListTags from "./ListTags";

export default function ValidateCard() {
  return (
    <Wrapper>
      <PostInfo platform={"twitter"} date={"21-03-2022"} />
      <Temp/>
      <ListTags arrayTags={["Alon","Ronder","Tag1","Tag2","Tag3","Tag4","Tag5","Tag6","Tag7","Tagggggggggg8"]}/>
      
      <LinkToOriginalPostStyle>See Original Post</LinkToOriginalPostStyle>
      
      <DecisionButton>
        <Button isOffensive={false} />
        <Button isOffensive={true} />
      </DecisionButton>
      <NotSure>NOT SURE</NotSure>
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
  margin-top: 50px;
  border-radius: 10px;
  background-color: white;
  border-style: solid;
  border-color: black;
  margin-bottom: 24px;
`;

const LinkToOriginalPostStyle = styled.div`
  width: 116px;
  height: 17px;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600px;
  text-align: center;
  line-height: 17px;
  text-decoration-line: underline;
  color: #2C63FD;
  margin-top: 24px;
  margin-bottom: 24px;
  margin-left: calc(451px / 2 - (116px /2) + 24px);
`;

const NotSure = styled.div`
width: 71px;
height: 17px;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 700px;
text-align: center;
align-items: center;
line-height: 17px;
color: #2C63FD;
margin-top: 17px;
margin-bottom: 1px;
margin-left: calc(451px / 2 - (71px /2) + 24px);
`;