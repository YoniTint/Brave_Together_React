import React from "react";
import styled from "styled-components";
import PostCard from "../Validate/PostCard";
import useGetPosts from "../Hooks/useGetPosts";
import useGetDecisions from "../Hooks/useGetDecisions";

export default function MyActionPost({ ActionTypeOfPosts, userId }) {
  const decisions = useGetDecisions(userId);

  return (
    <Wrapper>
      <TopContainerStyle>
          {console.log(decisions.data?.data.data)}
        {decisions.data?.data?.data?.map((decision) => {
          return (
            <PostWrapper>
              <PostCard postData={decision?.attributes?.post?.data?.attributes} />{" "}
            </PostWrapper>
          );
        })}
      </TopContainerStyle>
    </Wrapper>
  );
}
const TopContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  background-color: #e5e5e5;
  color: black;
  width: "calc(100% - 300px)";
  overflow: auto;
`;

const PostWrapper = styled.div`
  height: 588px;
  width: 451px;
  padding: 24px;
  margin-top: 68px;
  margin-left: 45px;
`;
