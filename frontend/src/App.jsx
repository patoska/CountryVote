import './App.css'
import { useEffect, useState } from 'react';
import Logo from '@/assets/logo.png';
import Sep from '@/assets/sep.png'
import VotingForm from '@/components/features/Votes/VotingForm';
import CountryList from '@/components/features/Countries/CountryList';
import TextInput from '@/components/common/TextInput';
import { useCountries } from '@/hooks/useCountries';

function App() {
  const {
      countries,
      handleVote,
    } = useCountries();
  const [top10, setTop10] = useState([]);
  const refreshCountries = (countryId) => {
    countries.forEach((country) => {
      if (country.id == countryId) {
        country.votes_count++;
      }
    });
    refreshTop10(countries)
  }

  useEffect(() => {
    refreshTop10(countries)
  }, [countries]);

  const refreshTop10 = (countries) => {
    setTop10(
      countries
        .sort((a, b) => b.votes_count - a.votes_count)
        .slice(0, 10)
    )
  }

  const search = (searchInput) => {
    let q = searchInput.target.value
    const searchCountry = countries.filter(
      country =>
        country.name.includes(q) || 
        country.capital.includes(q)|| 
        country.region.includes(q)|| 
        country.subregion.includes(q)
      );
    refreshTop10(searchCountry)
  }

  return (
    <>
      <div className="top-navbar">
        <img className="logo mr-3" src={Logo}/>
        <img src={Sep}/>
        <span className="ml-5">Frontend Developer Challenge</span>        
      </div>

      <div className="flex flex-col justify-center px-50">
        <VotingForm countries={countries} handleVote={handleVote} onVote={refreshCountries}></VotingForm>
        <h1 className="my-4">Top 10 Most Voted Countries</h1>

        <TextInput
          className="min-w-[520px]"
          name="search"
          placeholder="Search Country, Capital City, Region or Subregion"
          onChange={search}
        />
        <CountryList countries={top10}/>
      </div>

    </>
  )
}

export default App
