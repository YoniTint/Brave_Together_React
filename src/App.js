import React, { useState } from "react";
import SideBar from "./Components/SideBar/SideBar";
import Validate from "./Components/Validate/Validate";
import styled from "styled-components";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import ReportCard from "./Components/pages/ReportCard";

process.env.NODE_ENV === "development" && require("./fakeServer");

function App() {
  const queryClient = new QueryClient();
  const [isOffensivePost, setIsOffensivePost] = useState(null);
  const [platform, setPlatform] = useState();

  return (
      <QueryClientProvider client={queryClient}>
          <div style={mainPageStyle}>
              <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
                  {" "}
                  <SideBar />
                  <Validate setIsOffensivePost={setIsOffensivePost} setPlatform={setPlatform} />
                  { isOffensivePost && <ReportCard postUrl={isOffensivePost} platform={platform} /> }
              </div>
          </div>
      </QueryClientProvider>
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
