import React from "react";
import styled from "styled-components";
import PostInfo from "./PostInfo";
import ListTags from "./ListTags";

export default function PostCard({arrayTags, platform, date, postUrl}) {
    return (
        <Wrapper>
            <PostInfo platform={platform} date={date}/>
            <Temp/>
            <ListTags arrayTags={arrayTags} />
            <LinkToOriginalPostStyle>See Original Post</LinkToOriginalPostStyle>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  height: 605px;
  width: 451px;
  align-items:center;
  background-color: white;
`;

/**
 * Place for post, GET from Back
 */
 const Temp = styled.div`
 height: 336px;
 width: 441px;/** +10 border radius = 451*/
 margin-top: 50px;
 border-radius: 10px;
 background-color: white;
 border-style: solid;
 border-color: black;
 margin-bottom: 24px;
`;

/**
* Link to the original post
*/
const LinkToOriginalPostStyle = styled.div`
 width: 180px;
 height: 17px;
 font-family: "Open Sans";
 font-size: 14px;
 font-weight: 600;/**Needs to ask yoav, set to 600 weight doesn't work */
 text-align: center;
 line-height: 17px;
 text-decoration-line: underline;
 color: #2C63FD;
 margin-top: 24px;
 margin-bottom: 24px;
 margin-left: calc(451px / 2 - (180px /2));
`;