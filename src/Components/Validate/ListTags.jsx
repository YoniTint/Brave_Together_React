import React from "react";
import styled from "styled-components";
import InformationIcon from "./media/IconInformationTags.svg";

export default function ListTags({ arrayTags }) {
    return (
    <ListOfTags>
        {arrayTags?.map((tag) => {
          return(<Tags key={tag.id}> {tag.tag} </Tags>)})}
    {arrayTags?.length > 0 ? <InfoIcon src={InformationIcon}/> : ""}
    </ListOfTags>
    
    );
}

const ListOfTags = styled.div`
  height: 83px;
  overflow: auto;
  ::-webkit-scrollbar {
  width: 0px;
}
  display: flex;
  justify-content: flex-grow;/**Make adjustment according to tag size*/
  flex-wrap: wrap; /**If the length of tags is longer than his wrapper*/
`;

const Tags = styled.div`
  background-color: rgba(180, 180, 180, 0.4);
  border-radius: 10px;
  text-align: center;
  height: 28px;
  padding: 5px;
  margin: 5px;
`;

const InfoIcon = styled.img`
    width: 12px;
    height: 12px;
    mragin-left: 16px;
`;