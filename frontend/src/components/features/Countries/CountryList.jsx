const CountryList = ({ countries, searchTerm, setSearchTerm, handleVote }) => {
  if (countries.length === 0 && searchTerm) {
    return <p className="mt-5">No countries found matching "{searchTerm}".</p>;
  }

  if (countries.length === 0) {
     return <p className="mt-5">No countries to display.</p>;
  }

  return (
    <>
      <table className="card my-5">
        <thead>
          <tr>
            <th>Country</th>
            <th>Capital</th>
            <th>Region</th>
            <th>Subregion</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {countries.map(country => (
            <tr key={country.id}>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.region}</td>
              <td>{country.subregion}</td>
              <td>{country.votes_count}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
      
    </>
  );
};

export default CountryList;
