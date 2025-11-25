import { useCountries } from '@/hooks/useCountries';
import CountryList from '@/components/features/Countries/CountryList';
import Spinner from '@/components/common/Spinner';

const CountriesPage = () => {
  const {
    filteredCountries,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    handleVote,
  } = useCountries();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error loading data: **{error}**</div>;
  }

  return (
    <div className="countries-page">
      <h2>Countries</h2>
      <CountryList
        countries={filteredCountries}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleVote={handleVote}
      />
    </div>
  );
};

export default CountriesPage;
