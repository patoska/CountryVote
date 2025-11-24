import React from 'react';
import TextInput from '../../common/TextInput/TextInput';

const CountrySearch = ({ searchTerm, onSearchChange }) => (
  <div style={{ marginBottom: '20px' }}>
    <TextInput
      label="Search Country"
      placeholder="e.g., Canada, Japan..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  </div>
);

export default CountrySearch;