import React from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = React.useState([]);

  //to run only once, and not in every render!
  React.useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await axios(
      "https://61c0c1e233f24c00178235e6.mockapi.io/post"
    );
    const postList = response.data;

    setPosts(postList);
  }

  return (
    <div style={mainPage}>
      <div style={{ fontSize: 48 }}>מצעד הגבורה</div>
      {posts.length === 0 && <div>Loading...</div>}
      {posts.map((post) => {
        return (
          <div
            style={{
              fontSize: 32,
              border: "1px solid white",
              marginBottom: 12,
            }}
          >
            {" "}
            {post.platform} <br /> {post.name} <br /> {post.link}{" "}
          </div>
        );
      })}
    </div>
  );
}

export default App;

const mainPage = {
  textAlign: "center",
  padding: 24,
  color: "rgba(210,210,210)",
};
