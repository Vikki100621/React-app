/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useRouter } from 'next/router';

function SelectComponent() {
  const router = useRouter();
  const { search } = router.query;
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const limitNum = parseInt(selectedValue, 10);
    const newUrl = `/page/1?search=${search}&limit=${limitNum}`;
    router.push(newUrl);
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
