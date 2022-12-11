import axios from "axios";
import { useQuery } from "react-query";



export default function useGetPosts() {
    return useQuery("offensive posts", async () => {
      return await axios.get("http://localhost:1337/api/posts?populate=tags");
    })}