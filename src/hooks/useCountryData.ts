import { useQuery } from "react-query";
import axios from "axios";
import { CountriesCovidStats } from "../utils/types";

const fetchCountryData = async () => {
  const { data } = await axios.get<CountriesCovidStats>(
    `https://disease.sh/v3/covid-19/countries`
  );
  return data;
};

export const useCountryData = () => {
  return useQuery("countryData", fetchCountryData, {
    staleTime: 600000, // 10 minutes
    cacheTime: 900000, // 15 minutes
    refetchOnWindowFocus: false, // Prevent refetch on window focus
  });
};
