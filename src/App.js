import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import Validate from "./Components/Validate/Validate";
import styled from "styled-components";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

process.env.NODE_ENV === "development" && require("./fakeServer");

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MainPage>
        <Test>
          {" "}
          <SideBar />
          <Validate />
        </Test>
      </MainPage>
    </QueryClientProvider>
  );
}

const MainPage = styled.div`
  background-color: #e5e5e5;
`;
const Test = styled.div`
  display: flex;
  height: "100vh";
  width: "100vw";
`;


export default App;
