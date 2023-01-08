import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { ActionMenuButton } from "./ActionMenuButton";
import { Constants } from "../../Constants";
import MyActionPost from"./MyActionPost";
import useGetDecisions from "../Hooks/useGetDecisions";

const menuButtons = [
  { name: Constants.NOT_SURE_ACTION_TITLE, color:"#2C63FD"},
  { name: Constants.OFFENSIVE_ACTION_TITLE, color:"#F12B2C"},
  { name: Constants.SAFE_ACTION_TITLE, color:"#29CC97"},
  { name: Constants.STARRED_ACTION_TITLE, color:"#ffe135"},
];
export default function MyActions({ userId }) {
  const [currentAction, setCurrentState] = useState("Not Sure");
  const pageTitle = "Post activities";
  return (
    <Wrapper>
      <TitleStyle>{pageTitle}</TitleStyle>
      <MenuStyle>
      {menuButtons.map((menuButton) => {
          return <ActionMenuButton menuButton={menuButton} setCurrentAction={setCurrentState} currentAction={currentAction} key={menuButton.name}/>;
        })}

      </MenuStyle>
      <MyActionPost ActionTypeOfPosts={currentAction} userId={userId}></MyActionPost>
      
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #E5E5E5;
  color: black;
  width: "calc(100% - 300px)";
  overflow: auto;
`;

const TitleStyle = styled.div`
width: 200px;
height: 29px;
margin-top:59px;
margin-left:53px;
font-family: 'Inter';
font-weight: 700;
font-size: 24px;
line-height: 29px;
display: flex;
align-items: center;
color: #091430;
`
const MenuStyle = styled.div`
width: 1054px;
margin-top: 40px;
margin-left: 53px;
height: 40px;
display: flex;
justify-content: space-between;
border-bottom: 
`

