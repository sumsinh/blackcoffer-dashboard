import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const fetchInsightsData = async () => {
  const response = await axios.get(`${API_BASE_URL}/insights/`);
  return response.data;
};

export const fetchFilterOptions = async () => {
  const response = await axios.get(`${API_BASE_URL}/filters/`);
  return response.data;
};