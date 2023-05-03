import React, { useState } from 'react';

function Question({ options }) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      {options.map((option, index) => (
        <div
          key={index}
          style={{ 
            backgroundColor: selectedOption === option ? 'yellow' : 'white',
            cursor: 'pointer'
          }}
          onClick={() => setSelectedOption(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
}

export default Question;
