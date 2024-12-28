import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://arabic-news-api.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "249cf05a98msh66298ff551c5906p1ffd8ejsnaa3c0ebfc7fa",
    "x-rapidapi-host": "arabic-news-api.p.rapidapi.com",
  },
});

interface FetchDataResponse<T> {
  results: T[];
}

class APIClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = () => {
    return axiosInstance
      .get<FetchDataResponse<T>>(this.endPoint)
      .then((res) => res.data);
  };
}

export default APIClient;
