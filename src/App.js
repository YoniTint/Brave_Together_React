import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import Validate from "./Components/Validate/Validate";

function App() {
  //declare a new state variable

  return (
    <div style={mainPageStyle}>
      <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
        {" "}
        <SideBar />
        <Validate />
      </div>
    </div>
  );
}

const mainPageStyle = {
  backgroundColor: "rgb(229, 229, 229)",
  textAlign: "center",
};
export default App;
