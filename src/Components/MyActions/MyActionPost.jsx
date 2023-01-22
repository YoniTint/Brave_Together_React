import React from "react";
import styled from "styled-components";
import PostCard from "../Validate/PostCard";
import useGetPosts from "../Hooks/useGetPosts";
import useGetDecisions from "../Hooks/useGetDecisions";
import {Constants} from "../../Constants";

export default function MyActionPost({ ActionTypeOfPosts, userId, currentAction }) {
  const decisions = useGetDecisions(userId);

  return (
    <Wrapper>
      <TopContainerStyle>
          {console.log(decisions.data?.data.data)}
          {
            decisions.data?.data?.data?.filter(decision => {
                if (decision?.attributes.volunteerDecision && currentAction === Constants.OFFENSIVE_ACTION_TITLE) {
                    return true;
                }
                else if (!decision?.attributes.volunteerDecision && currentAction === Constants.SAFE_ACTION_TITLE) {
                    return true;
                }

                return false;
            }).map((decision) => {
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
  gap: 24px;
  margin-left: 20px;
  margin-top: 20px;
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
  border-radius: 25px;
  background-color: white;
  padding: 24px;
`;
