import { useState, useEffect, useMemo } from 'react';
import { fetchCountries, voteForCountry } from '@/api/countries';

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

  const handleVote = async (countryId: number, name: string, email:string) => {
    try {
      const updatedCountry = await voteForCountry(countryId, name, email);
    } catch (err) {
      console.log(`Voting failed: ${err.message}`)
    }
  };

  return {
    isLoading,
    error,
    countries,
    handleVote
  };
};
