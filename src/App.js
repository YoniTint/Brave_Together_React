import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import SideBar from "./Components/SideBar/SideBar";
import ReportCard from "./Components/pages/ReportCard";
import Validate from "./Components/Validate/Validate";
import FAQ from "./Components/FAQ";
import MyActions from "./Components/MyActions/MyActions"

function App() {
  const queryClient = new QueryClient();
  const [offensivePost, setOffensivePost] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
      const token = localStorage.getItem("token");

      if(token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          axios.get('http://localhost:1337/api/users/me').then(data => {setUserId(data.data.id)});
          return;
      }

      const identifier = prompt("username: ");
      const password = prompt("password: ");

      login(identifier, password, setUserId);
  }, [])

  return (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <MainPageStyle>
              <SideBar />
              <Routes>
                <Route path="/" element={ <Validate setOffensivePost={setOffensivePost} /> } />
                <Route path="FAQ" element={<FAQ />} />
                <Route path="/actions" element={<MyActions userId={userId}/>} />
              </Routes>
                { offensivePost && <ReportCard post={offensivePost} userId={userId}/> }
          </MainPageStyle>
        </QueryClientProvider>
    </BrowserRouter>
  );
}

async function login(identifier, password, setUserId) {
    axios
        .post('http://localhost:1337/api/auth/local', {
            identifier,
            password,
        })
        .then(response => {
            // Handle success.
            console.log('Well done!');
            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.jwt}`;
            setUserId(response.data.user.id);

            localStorage.setItem("token", response.data.jwt);
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
        });

}
const MainPageStyle = styled.div`
  display: flex;
  background-color: rgb(229, 229, 229);
  text-align: center;
  height: 100vh;
  width: 100%;
`;
export default App;
//<div style={{ display: "flex", height: "100%", width: "100vw" }}>
