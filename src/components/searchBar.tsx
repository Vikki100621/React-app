import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import Button from './UI/button';
import Input from './UI/input';
import {
  updateInputValue,
  updateSearchQuery,
} from '../store/reducers/SearchSlice';

function SearchBar() {
  const dispatch = useAppDispatch();
  const { inputValue } = useAppSelector((state) => state.searchReducer);
  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    dispatch(updateInputValue(value));
  };
  const handleSearch = () => {
    localStorage.setItem('searchQuery', inputValue);
    dispatch(updateSearchQuery(inputValue));
  };

  return (
    <div className="top__section">
      <h1>Search your your recipe</h1>
      <Input type="text" onChange={handleInputChange} />
      <Button
        testDataId="search"
        classes="top__section-button"
        title="search"
        onClick={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
