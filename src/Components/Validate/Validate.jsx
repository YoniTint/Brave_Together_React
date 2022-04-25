import React from "react";
import ValidateCard from "./ValidateCard";
import styled from "styled-components";
export default function Validate() {
  const amountOfPostsToCheck = 124; //Server input

  return (
    <Wrapper>
      <TopContainerStyle>
        <ReportCard>
          {amountOfPostsToCheck} posted are waiting for you to check
        </ReportCard>
      </TopContainerStyle>
      <ValidateCard />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: "#E5E5E5";
  color: "black";
  width: "calc(100% - 300px)";
`;

const ReportCard = styled.div` //Ask yoav about the font family
  height: 33px;
  width: 451px;
  padding: 24px;
  margin-top: 45px;
  margin-left: 48px;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  text-align: left;
  line-height: 22px;
  color: #091430;
`;

const TopContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;
