import React from "react";
import styled from "styled-components";
import PostInfo from "./PostInfo";
import ListTags from "./ListTags";
import { TwitterTweetEmbed } from "react-twitter-embed";

export default function PostCard({ postData }) {
  if (!postData) {
    return <div></div>;
  }
  return (
    <Wrapper>
      <PostInfo platform={postData.platform} date={postData.datePosted} />

      <Temp>
        {postData.platform === "facebook" && (
          <iframe
            src={postData.url}
            width="441"
            height="336"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        )}
        {postData.platform === "twitter" && (
          <TwitterTweetEmbed tweetId={postData.url} />
        )}
      </Temp>
      <ListTags arrayTags={postData.tags} />
      <LinkToOriginalPostStyle
        onClick={() => {
          if (postData.platform === "twitter") {
            window.open(
              `https://twitter.com/twitter/status/${postData.url}`,
              "_blank"
            );
          } else if (postData.platform === "facebook") {
            let pluginUrl = postData.url;

            // Split the URL by "href="
            let splitUrl = pluginUrl.split("href=");

            // The actual post URL is the second item in the resulting array
            let postUrl = splitUrl[1];

            const decodedUrl = decodeURIComponent(postUrl);

            window.open(decodedUrl, "_blank");
          }
        }}
      >
        See Original Post
      </LinkToOriginalPostStyle>
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
  cursor: pointer;
`;
