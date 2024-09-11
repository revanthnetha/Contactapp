import { useQuery } from 'react-query';
import axios from 'axios';
import { HistoricalData } from "../utils/types";

const fetchHistoricData = async () => {
  const { data } = await axios.get<HistoricalData>('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  return data;
};

export const useHistoricData = () => {
  return useQuery('HistoricData', fetchHistoricData, {
    staleTime: 600000, // 10 minutes
    cacheTime: 900000, // 15 minutes
    refetchOnWindowFocus: false, // Prevent refetch on window focus
  });
};
