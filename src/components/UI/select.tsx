/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import {
  searchChangeLimit,
  searchChangePage,
} from '../../store/reducers/SearchSlice';

function SelectComponent() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const handleQueryChange = (param: string, value: number) => {
    queryParams.set(`${param}`, value.toString());
    navigate({ search: queryParams.toString() });
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    handleQueryChange('page', 1);
    const limitNum = parseInt(selectedValue, 10);
    dispatch(searchChangePage(0));
    dispatch(searchChangeLimit(limitNum));
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
