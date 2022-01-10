import React from "react";
import ValidateCard from "./ValidateCard"

export default function Validate() {
  const amountOfPostsToCheck = 124;//Server input
  
  return( 
  <div style={mainValidateStyle}>
    <div style = {topContainerStyle}>
    <div style={amountOfPostsStyle}> {amountOfPostsToCheck} posted are waiting for you to check</div>
    <div style = {viewsStyle}>views</div>
    </div>
    
     <ValidateCard/>
     </div>
  
    );
 
}

const mainValidateStyle = {
  backgroundColor: "#E5E5E5",
  color: "black",
  width: "calc(100% - 300px)",
};

const amountOfPostsStyle = {
  height: 33,
  width: 470,
  marginTop: 45,
  marginLeft:48,
  fontFamily: "Open Sans",
  fontSize: 24,
  fontStyle: "normal",
  fontWeight: 700,
  textAlign: "left",
  LineHeight: 32.68,
};
const viewsStyle={
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

const topContainerStyle={
  display: "flex",
  justifyContent: "space-between", 
};