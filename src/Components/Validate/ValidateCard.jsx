import React from "react";
import Button from "./Button";

export default function ValidateCard() {
  return (
    <div style={cardStyle}>
      <div style={buttonsStyle}>
        <Button />
        <Button isOffensive={true} />
      </div>
    </div>
  );
}

const cardStyle = {
  height: 694,
  width: 499,
  left: 892,
  top: 129,
  borderRadius: 25,
  padding: 24,
  border: "solid",
  backgroundColor: "white",
};

const buttonsStyle = {
  display: "flex",
  justifyContent: "center",
  gap: 16,
};
