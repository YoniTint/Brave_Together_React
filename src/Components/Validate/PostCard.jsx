import React from "react";
import styled from "styled-components";
import PostInfo from "./PostInfo";
import ListTags from "./ListTags";
import { TwitterTweetEmbed } from "react-twitter-embed";

export default function PostCard({ arrayTags, platform, date, postUrl }) {
  return (
    <Wrapper>
      <PostInfo platform={platform} date={date} />

      <Temp>
        {platform === "facebook" && (
          <iframe
            src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F${postUrl}&width=441&show_text=true&height=336&appId`}
            width="441"
            height="336"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        )}
        {platform === "twitter" && <TwitterTweetEmbed tweetId={postUrl} />}
      </Temp>
      <ListTags arrayTags={arrayTags} />
      <LinkToOriginalPostStyle>See Original Post</LinkToOriginalPostStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 605px;
  width: 451px;
  align-items: center;
  background-color: white;
`;

/**
 * Place for post, GET from Back
 */
const Temp = styled.div`
  height: 336px;
  width: 441px; /** +10 border radius = 451*/
  margin-top: 50px;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 24px;
  overflow: auto;
`;

/**
 * Link to the original post
 */
const LinkToOriginalPostStyle = styled.div`
  width: 180px;
  height: 17px;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 600; /**Needs to ask yoav, set to 600 weight doesn't work */
  text-align: center;
  line-height: 17px;
  text-decoration-line: underline;
  color: #2c63fd;
  margin-top: 24px;
  margin-left: calc(451px / 2 - (180px / 2));
`;
