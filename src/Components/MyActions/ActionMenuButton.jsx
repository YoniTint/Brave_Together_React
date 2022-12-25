import React from "react";
import styled from "styled-components";

export function ActionMenuButton({menuButton, setCurrentAction, currentAction}) {

//   if (isCurrentURL) {
//     buttonStyle.color = "#2C63FD";
//     buttonStyle.backgroundColor = "#F7F8FC";
//   }
  return (
    <ButtonStyle onClick={()=> setCurrentAction(menuButton.name)}>
     <span>
      {menuButton.name}
      </span>
      <HrStyled color={menuButton.name === currentAction? menuButton.color : null}></HrStyled>
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