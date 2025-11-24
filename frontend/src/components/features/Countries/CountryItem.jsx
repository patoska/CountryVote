import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import TextInput from '../../common/TextInput/TextInput';

const CountryItem = ({ country, onVote }) => {
  const [email, setEmail] = useState('');
  const [isVoting, setIsVoting] = useState(false);

  const handleVoteClick = async () => {
    if (!email || !country.id) return;

    setIsVoting(true);
    await onVote(country.id, email);
    setIsVoting(false);
  };

  return (
    <li className="country-item">
      <h3>{country.name}</h3>
      <p>Votes: {country.votes || 0}</p>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <TextInput
          placeholder="Your email to vote"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isVoting}
        />
        <Button onClick={handleVoteClick} disabled={!email || isVoting}>
          {isVoting ? 'Voting...' : 'Vote'}
        </Button>
      </div>
    </li>
  );
};

export default CountryItem;