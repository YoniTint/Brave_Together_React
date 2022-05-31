import axios from "axios";
import { useQuery } from "react-query";

export default async function postReport() {
  return await axios.post("api/report", { "Minimizing the holocaust": true });
}
