import axios from "axios";
import { useQuery } from "react-query";

export default async function postReportSafe(post, userId) {
    return await axios.post("http://localhost:1337/api/decisions", {
        data: {
            post: post.id,
            volunteerDecision: false,
            volunteer: userId
        }
    });
}
