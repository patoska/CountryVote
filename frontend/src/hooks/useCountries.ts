import { useState, useEffect, useMemo } from 'react';
import { fetchCountries } from '@/api/countries';

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCountries() {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (err) {
        console.log("ERROR", err)
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadCountries();
  }, []);

  return {
    isLoading,
    error,
    countries,
  };
};
