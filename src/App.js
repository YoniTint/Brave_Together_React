import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import SideBar from "./Components/SideBar/SideBar";
import ReportCard from "./Components/pages/ReportCard";
import Validate from "./Components/Validate/Validate";
import FAQ from "./Components/FAQ";
import ActionMenu from "./Components/MyActions/ActionMenu"

process.env.NODE_ENV === "development" && require("./fakeServer");

function App() {
  const queryClient = new QueryClient();
  const [isOffensivePost, setIsOffensivePost] = useState(null);
  const [platform, setPlatform] = useState();

  return (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <MainPageStyle>
              <SideBar />
              <Routes>
                <Route path="/" element={ <Validate setIsOffensivePost={setIsOffensivePost} setPlatform={setPlatform} /> } />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/actions" element={<ActionMenu />} />
              </Routes>
                { isOffensivePost && <ReportCard postUrl={isOffensivePost} platform={platform} /> }
          </MainPageStyle>
        </QueryClientProvider>
    </BrowserRouter>
  );
}
const MainPageStyle = styled.div`
  display: flex;
  background-color: rgb(229, 229, 229);
  text-align: center;
  height: 100%;
  width: 100%;
`;
export default App;
//<div style={{ display: "flex", height: "100%", width: "100vw" }}>
