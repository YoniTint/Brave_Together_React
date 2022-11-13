import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import SideBar from "./Components/SideBar/SideBar";
import ReportCard from "./Components/pages/ReportCard";
import Validate from "./Components/Validate/Validate";
import FAQ from "./Components/FAQ";

process.env.NODE_ENV === "development" && require("./fakeServer");

function App() {
  const queryClient = new QueryClient();
  const [isOffensivePost, setIsOffensivePost] = useState(null);
  const [platform, setPlatform] = useState();

  return (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <div style={mainPageStyle}>
            <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
              <SideBar />
              <Routes>
                <Route path="/" element={ <Validate setIsOffensivePost={setIsOffensivePost} setPlatform={setPlatform} /> } />
                <Route path="FAQ" element={<FAQ />} />
              </Routes>
                { isOffensivePost && <ReportCard postUrl={isOffensivePost} platform={platform} /> }
            </div>
          </div>
        </QueryClientProvider>
    </BrowserRouter>
  );
}

const MainPage = styled.div`
  background-color: #e5e5e5;
`;

const mainPageStyle = {
    backgroundColor: "rgb(229, 229, 229)",
    textAlign: "center",
};

export default App;
