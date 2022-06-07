import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import Validate from "./Components/Validate/Validate";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import ReportCard from "./Components/pages/ReportCard";

process.env.NODE_ENV === "development" && require("./fakeServer");

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div style={mainPageStyle}>
        <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
          {" "}
          <SideBar />
          <Validate />
          <ReportCard />
        </div>
      </div>
    </QueryClientProvider>
  );
}

const mainPageStyle = {
  backgroundColor: "rgb(229, 229, 229)",
  textAlign: "center",
};
export default App;
