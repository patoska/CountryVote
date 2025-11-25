import { useState } from 'react';
import Button from '@/components/common/Button';
import TextInput from '@/components/common/TextInput';
import Select from 'react-select';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

let name = ""
let email = ""
let countryId = 0

let setName = (nameInput) => {
  name = nameInput
}
let setEmail = (emailInput) => {
  email = emailInput
}
let setCountry = (countryIdInput) => {
  countryId = countryIdInput.value
}

const VotingForm = ({ countries, handleVote, onVote }) => {
  const [isVoting, setIsVoting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  const options = countries.map((country) => ({
    value: country.id,
    label: country.name,
  }));

  let submit = async () => {
    if (!name || !email || countryId == 0) return;

    setIsVoting(true)
    await handleVote(countryId, name, email);
    
    setHasVoted(true)
    setIsVoting(false)
    onVote(countryId)
  }

  if (hasVoted) {
    return (
      <div className="card vote-form">
        <h3 className='mb-0'>
          <CheckCircleIcon className="size-[20px] inline-block text-[#3FDE92]" />
          <span className='ml-2'>Your vote was succesfully submitted</span>
        </h3>
      </div>
    )
  }
  return (
    <>
      <div className="card vote-form">
        <h3>Vote your Favourite Country</h3>
        <div  className='form'>
          <div>
            <TextInput
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              disabled={isVoting}
            />
            <TextInput
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              disabled={isVoting}
            />
            <div><Select
              options={options}
              placeholder="Country"
              onChange={setCountry}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  color: '#8A8C90',
                  borderColor: state.isFocused ? '#8A8C90' : '#EFEFEF',
                }),
                singleValue: (baseStyles) => ({
                  ...baseStyles,
                  color: '#8A8C90',
                }),
              }}
            /></div>
            <Button
              type="submit"
              onClick={submit}
            >
              {isVoting ? 'Voting...' : 'Submit Vote'}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VotingForm;
