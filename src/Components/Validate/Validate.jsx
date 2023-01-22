import React from "react";
import ValidateCard from "./ValidateCard";
import styled from "styled-components";
import useGetPosts from "../Hooks/useGetPosts";

export default function Validate({ setOffensivePost, userId }) {
  const posts = useGetPosts();
  return (
    <Wrapper>
      <TopContainerStyle>
        {posts.data?.data.data.map((post) => {
          return (
            <ValidateCard
              key={post.attributes.url}
              postData={post}
              style={ValidateCardStyle}
              setOffensivePost={setOffensivePost}
              userId={userId}
            />
          );
        })}
      </TopContainerStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #E5E5E5;
  color: black;
  width: "calc(100% - 300px)";
  overflow: auto;
`;

const AmountOfPostsToCheck = styled.div`
  height: 22px;
  width: 343px;
  margin-top: 64px;
  margin-left: 17px;
  font-family: "open sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  align-items: center;
  line-height: 22px;
  color: #091430;
`;
const ValidateCardStyle = {
  height: 588,
  width: 451,
  padding: 24,
  marginTop: 68,
  marginLeft: 45,
};

const TopContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
