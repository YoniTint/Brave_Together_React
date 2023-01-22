import axios from "axios";
import { useQuery } from "react-query";

export default function useGetDecisions(userId) {
    return useQuery("decisions", async () => {
        return await axios.get(`http://localhost:1337/api/decisions?populate=*&filters[volunteer][id][$eq]=${userId}`);
    })}