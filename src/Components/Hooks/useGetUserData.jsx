import axios from "axios";
import { useQuery } from "react-query";



export default function useGetPosts() {
    return useQuery("get users", () => {
      return axios.get("api/users");
    })}