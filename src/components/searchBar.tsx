import { SearchBarProps } from '../interface/interface';
import Button from './UI/button';
import Input from './UI/input';

function SearchBar({
  inputValue,
  handleSearch,
  handleInputChange,
}: SearchBarProps) {
  return (
    <div className="top__section">
      <h1>Search your GIF</h1>
      <Input type="text" value={inputValue} onChange={handleInputChange} />
      <Button
        classes="top__section-button"
        title="search"
        onClick={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
