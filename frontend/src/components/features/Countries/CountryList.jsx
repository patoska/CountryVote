// src/components/features/Countries/CountryList.jsx
import React from 'react';
import CountryItem from './CountryItem';
import CountrySearch from './CountrySearch';

const CountryList = ({ countries, searchTerm, setSearchTerm, handleVote }) => {
  if (countries.length === 0 && searchTerm) {
    return <p>No countries found matching "{searchTerm}".</p>;
  }

  if (countries.length === 0) {
     return <p>No countries to display.</p>;
  }

  return (
    <>
      <CountrySearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {countries.map(country => (
          <CountryItem key={country.id} country={country} onVote={handleVote} />
        ))}
      </ul>
    </>
  );
};

export default CountryList;