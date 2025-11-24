import { useState, useEffect, useMemo } from 'react';
import { fetchCountries, voteForCountry } from '../api/countries';

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function loadCountries() {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadCountries();
  }, []);

  const handleVote = async (countryId, email) => {
    try {
      const updatedCountry = await voteForCountry(countryId, email);
      setCountries(prevCountries =>
        prevCountries.map(c =>
          c.id === countryId ? updatedCountry : c
        )
      );
    } catch (err) {
      alert(`Voting failed: ${err.message}`);
    }
  };

  const filteredCountries = useMemo(() => {
    if (!searchTerm) {
      return countries;
    }
    const lowerCaseSearch = searchTerm.toLowerCase();
    return countries.filter(country =>
      country.name.toLowerCase().includes(lowerCaseSearch)
    );
  }, [countries, searchTerm]);

  return {
    filteredCountries,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    handleVote,
  };
};