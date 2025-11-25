import './App.css'
import Logo from '@/assets/logo.png';
import Sep from '@/assets/sep.png'
import VotingForm from '@/components/features/Votes/VotingForm';
import CountryList from '@/components/features/Countries/CountryList';
import TextInput from '@/components/common/TextInput';
import { useCountries } from '@/hooks/useCountries';

let checkInput = () => {

}

function App() {
  const {
      countries,
      isLoading,
      error,
    } = useCountries();

  let top10 = countries.sort((a, b) => b.votes_count - a.votes_count);
  top10 = top10.slice(0, 10);

  return (
    <>
      <div className="top-navbar">
        <img className="logo mr-3" src={Logo}/>
        <img src={Sep}/>
        <span className="ml-5">Frontend Developer Challenge</span>        
      </div>

      <div className="flex flex-col justify-center px-50">
        <VotingForm></VotingForm>
        <h1 className="my-4">Top 10 Most Voted Countries</h1>

        <TextInput
          className="min-w-[520px]"
          name="search"
          placeholder="Search Country, Capital City, Region or Subregion"
          onChange={checkInput}
        />
        <CountryList countries={top10}/>
      </div>

    </>
  )
}

export default App
