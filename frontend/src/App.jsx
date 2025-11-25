import { useState } from 'react'
import './App.css'
import Logo from '@/assets/logo.png';
import Sep from '@/assets/sep.png'
import VotingForm from '@/components/features/Votes/VotingForm';
import CountryList from '@/components/features/Countries/CountryList';
import TextInput from '@/components/common/TextInput';

let checkInput = () => {

}

let countries = [
  {id: 1, name: "Chile", capital: "Santiago", region: "América", subregion: "Sudamérica", votes: 3},
  {id: 1, name: "Peru", capital: "Lima", region: "América", subregion: "Sudamérica", votes: 6}
]

function App() {
  const [count, setCount] = useState(0)

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

        <CountryList countries={countries}/>
      </div>

    </>
  )
}

export default App
