import axios from "axios";
import { useQuery } from "react-query";

export default async function postReport(URL, reasons, other) {
    return await axios.post("http://localhost:1337/api/decisions", {
      data: {
        volunteerDecision: true,
        reasons: Object.keys(reasons)
      }
  });
}
