import React, { useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

const CountrySelector = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const options = [
    { value: 'belgium', label: 'Belgium' },
    { value: 'spain', label: 'Spain' },
    { value: 'france', label: 'France' },
    { value: 'kazakhstan', label: 'Kazakhstan' },
  ];

  const handleVisit = () => {
    if (selectedOption) {
      navigate(`/${selectedOption.value}`);
    }
  };

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder="Select a country"
      />
      {selectedOption && (
        <button onClick={handleVisit} style={{ marginTop: '10px' }}>
          Visit {selectedOption.label}
        </button>
      )}
    </div>
  );
};

export default CountrySelector;
