import React from "react";
import ValidateCard from "./ValidateCard"

export default function Validate() {
  
  
  return( 
  <div style={validateStyle}> <ValidateCard/></div>
    );
 
}

const validateStyle = {
  backgroundColor: "#E5E5E5",
  color: "black",
  width: "calc(100% - 300px)",
};
