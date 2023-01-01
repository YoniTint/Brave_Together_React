import React from "react";
import styled from "styled-components";
import PostCard from "../Validate/PostCard";
import useGetPosts from "../Hooks/useGetPosts";

export default function MyActionPost({ ActionTypeOfPosts }) {
  const posts = useGetPosts();
  return (
    <TopContainerStyle>
    {posts.data?.data.data.map((post) => {
      return (
        <PostCard
        postData={post.attributes}
      />
      );
    })}
    </TopContainerStyle>
  );
}
const TopContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


