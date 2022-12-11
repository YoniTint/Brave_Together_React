import React from "react";
import Button from "./Button";
import styled from "styled-components";
import PostCard from "./PostCard";

export default function ValidateCard({
  postData,
  setOffensivePost
}) {
  return (
    <Wrapper>
      <PostCard
        postData={postData.attributes}
      />
      <DecisionButton>
        <Button
          isOffensive={false}
          setOffensivePost={setOffensivePost}
          postData={postData}
        />
        <Button
          isOffensive={true}
          setOffensivePost={setOffensivePost}
          postData={postData}
        />
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
  margin-top: 44px;
  margin-left: 21px;
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
