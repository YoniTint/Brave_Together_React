import React from "react";
import styled from "styled-components";

export function ActionMenuButton({menuButton, setCurrentAction, currentAction}) {

  return (
    <ButtonStyle onClick={()=> setCurrentAction(menuButton.name)}>
     <span>
      {menuButton.name}
      </span>
      <HrStyled color={menuButton.name === currentAction? menuButton.color : "#e5e5e5"}></HrStyled>
      <BottomLineMenuButtons></BottomLineMenuButtons>
    </ButtonStyle>
  );
  
}
const ButtonStyle = styled.div`
cursor:pointer;
width: 80px;
height: 22px;
font-family: 'Inter';
font-weight: 500;
font-size: 18px;
color: #091430;
opacity: 0.5;
`
const HrStyled = styled.hr`
color: ${props => props.color};
height: 3px;
`
const BottomLineMenuButtons = styled.hr`
width: 1054px;
height: 0px;
margin-top:-10px;
opacity: 0.3;
border: 1px solid #091430;
`