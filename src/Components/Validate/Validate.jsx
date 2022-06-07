import React from "react";
import ValidateCard from "./ValidateCard";
import styled from "styled-components";
import useGetPosts from "../Hooks/useGetPosts";
export default function Validate() {
  const amountOfPostsToCheck = 124; //Server input
  const posts = useGetPosts();
  return (
    <Wrapper>
      <AmountOfPostsToCheck>
        {amountOfPostsToCheck} posted are waiting for you to check
      </AmountOfPostsToCheck>
      <TopContainerStyle>
        {posts.data?.data.map((post) => {
          return <ValidateCard key={post.url} postData={post} />;
        })}
      </TopContainerStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: "#E5E5E5";
  color: "black";
  width: "calc(100% - 300px)";
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

const TopContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
