import axios from "axios";
import { useQuery } from "react-query";

export default async function postReport(post, reasons, other, userId) {
    const keys = Object.keys(reasons);
    const reasonsArray = keys.map(key => {
        if (reasons[key]) {
            return {
                reason: key
            }
        }
    }).filter(item => item);

    return await axios.post("http://localhost:1337/api/decisions", {
      data: {
          post: post.id,
          volunteerDecision: true,
          reasons: reasonsArray,
          volunteer: userId
      }
  });
}
