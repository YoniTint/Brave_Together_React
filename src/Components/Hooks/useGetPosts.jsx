import axios from "axios";
import { useQuery } from "react-query";



export default function useGetPosts() {
    return useQuery("offensive posts", () => {
      return axios.get("api/posts");
    })}