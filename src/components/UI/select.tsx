/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

interface SelectComponentProps {
  onChange: (num: string) => void;
}

function SelectComponent({ onChange }: SelectComponentProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <div>
      <label htmlFor="select">Select the quantity</label>
      <select data-testid="select" id="select" onChange={handleChange}>
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="8">8</option>
        <option value="10">10</option>
      </select>
    </div>
  );
}
export default SelectComponent;
