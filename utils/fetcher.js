import axios from "axios";

export async function fetchJSON(url, headers = {}) {
  const response = await axios.get(url, { headers });
  return response.data;
}
