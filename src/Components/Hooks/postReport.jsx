import axios from "axios";
import { useQuery } from "react-query";

export default async function postReport(URL, reasons, other) {
  return await axios.post("api/report", { URL, reasons, other });
}
