import React from "react";
import Button from "./Button";
import styled from "styled-components";
import PostCard from "./PostCard";

export default function ValidateCard({ postData, setIsOffensivePost }) {
  console.log(postData);
  return (
    <Wrapper>
      <PostCard
        arrayTags={[
          "Alon",
          "Ronder",
          "Tag1",
          "Tag2",
          "Tag3",
          "Tag4",
          "Tag5",
          "Tag6",
          "Tag7",
          "Tagggggggggg8",
        ]}
        platform={postData.platform}
        date={postData.date}
        postUrl={postData.url}
      />
      <DecisionButton>
        <Button isOffensive={false} setIsOffensivePost={setIsOffensivePost} />
        <Button isOffensive={true} setIsOffensivePost={setIsOffensivePost} />
      </DecisionButton>
      <NotSure>NOT SURE</NotSure>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 694px;
  width: 451px;
  border-radius: 25px;
  padding: 24px;
  background-color: white;
`;

const DecisionButton = styled.div`
  align-items: bottom;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

/**
 * Link after the 'SAFE' and 'OFFENSIVE' button. If the user doesn't know what to decide about the current post
 */
const NotSure = styled.div`
  width: 71px;
  height: 17px;
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  align-items: center;
  line-height: 17px;
  color: #2c63fd;
  margin-top: 17px;
  margin-bottom: 1px;
  margin-left: calc(451px / 2 - (71px / 2));
`;
