import React from "react";
import ValidateCard from "./ValidateCard";
import styled from "styled-components";
import { useQuery } from "react-query";

import axios from "axios";
import useGetPosts from "../Hooks/useGetPosts";
export default function ExamplePattern() {
  const amountOfPostsToCheck = 124; //Server input

  const query = useGetPosts();

  console.log(query);
  return (
    <Wrapper>
      {query.status === "loading" && <div>Cool Spinner...</div>}

      {query.status !== "loading" &&
        query.data.data.map((post) => {
          return <div>{post.message}</div>;
        })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: "#E5E5E5";
  color: "black";
  width: "calc(100% - 300px)";
`;

const ReportCard = styled.div`
  height: 33;
  width: 470;
  margin-top: 45;
  margin-left: 48;
  font-family: Open Sans;
  font-size: 24;
  font-style: normal;
  font-weight: 700;
  text-align: left;
  line-height: 32.68;
`;
const viewsStyle = {
  height: 27,
  width: 70,
  borderRadius: 20,
  padding: 4,
  marginRight: 69,
  marginTop: 48,
  fontFamily: "Open Sans",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: 600,
  textAlign: "left",
};

const TopContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;



