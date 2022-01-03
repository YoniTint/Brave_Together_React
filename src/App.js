import React from "react";
import axios from "axios";
import SideBar from "./Components/SideBar";
import Validate from "./Components/Validate/Validate";

function App() {
  //declare a new state variable

  return (
    <div style={mainPageStyle}>
      <div style={{ display: "flex", height: "100vh" }}>
        {" "}
        <SideBar />
        <Validate />
      </div>
    </div>
  );
}

const mainPageStyle = {
  textAlign: "center",
};
export default App;
