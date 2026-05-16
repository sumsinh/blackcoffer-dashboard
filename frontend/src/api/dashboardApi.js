import axios from "axios";

const BASE_URL =
  "https://blackcoffer-dashboard-yj0y.onrender.com/api";

export const fetchInsightsData = async () => {

  const response = await axios.get(
    `${BASE_URL}/insights/`
  );

  return response.data;
};

export const fetchFilterOptions = async () => {

  const response = await axios.get(
    `${BASE_URL}/filters/`
  );

  return response.data;
};