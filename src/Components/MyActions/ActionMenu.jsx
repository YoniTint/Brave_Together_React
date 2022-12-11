import React from "react";
import styled from "styled-components";


const menuOptions = [
  { name: "Not Sure"},
  { name: "Offensive"},
  { name: "Safe"},
  { name: "Starred"},
];
export default function ActionMenu({  }) {
  const pageTitle = "Post activities";
  return (
    <Wrapper>
      <TitleStyle>{pageTitle}</TitleStyle>
      <MenuStyle>
      {menuOptions.map((menuOptions) => {
          return <NavButton button={menuOptions} />;
        })}

      </MenuStyle>
      
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
position: absolute;
width: 200px;
height: 29px;
left: 305px;
top: 59px;
font-family: 'Inter';
font-weight: 700;
font-size: 24px;
line-height: 29px;
display: flex;
align-items: center;
color: #091430;
`
const MenuStyle = styled.div`
position: absolute;
width: 1054px;
height: 40px;
left: 305px;
top: 128px;
`
const ButtonMenuStyle = styled.div`

`
