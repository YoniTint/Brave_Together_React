import React from "react";
import styled from "styled-components";

export function ActionMenuButton({menuButton}) {

//   if (isCurrentURL) {
//     buttonStyle.color = "#2C63FD";
//     buttonStyle.backgroundColor = "#F7F8FC";
//   }
  return (
    <ButtonStyle>
     
      {menuButton.name}
    </ButtonStyle>
  );
  
}
const ButtonStyle = styled.div`
width: 80px;
height: 22px;
font-family: 'Inter';
font-weight: 500;
font-size: 18px;
color: #091430;
opacity: 0.5;
`