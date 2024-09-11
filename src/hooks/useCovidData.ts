import { useQuery } from 'react-query';
import axios from 'axios';
import { CovidStats } from "../utils/types";

const fetchCovidData = async () => {
  const { data } = await axios.get<CovidStats>('https://disease.sh/v3/covid-19/all');
  return data;
};

export const useCovidData = () => {
  return useQuery('covidData', fetchCovidData, {
    staleTime: 600000, // 10 minutes
    cacheTime: 900000, // 15 minutes
    refetchOnWindowFocus: false, // Prevent refetch on window focus
  });
};
