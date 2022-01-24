import React from "react";
import FAQ from "./Components/FAQ";
import SideBar from "./Components/SideBar/SideBar";
import Validate from "./Components/Validate/Validate";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //declare a new state variable

  return (
    <BrowserRouter>
      <div style={mainPageStyle}>
        <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
          <SideBar />
          <Routes>
            <Route path="/" element={<Validate />} />
            <Route path="FAQ" element={<FAQ />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const mainPageStyle = {
  backgroundColor: "rgb(229, 229, 229)",
  textAlign: "center",
};
export default App;
