import { useQuery } from "react-query";
import APIClient from "../services/api-client";

interface newsInterface {
  headline: string;
  underHeadline: string;
  content: string;
  date: string;
  image: string;
  url: string;
  imagesSrcset: string[];
}

const apiClient = new APIClient<newsInterface>("/aljazeera");

const useData = () =>
  useQuery({
    queryKey: ["news"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useData;
