/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormEvent, useRef } from 'react';

import { useRouter } from 'next/router';
import Button from './UI/button';

function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { limit } = router.query;
  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    const inputValue = inputRef.current?.value;
    if (inputValue) {
      localStorage.setItem('searchQuery', inputValue);
    }
    const newUrl = `/page/1?search=${inputValue}&limit=${limit}`;
    router.push(newUrl);
  };

  return (
    <div className="top__section">
      <h1>Search your recipe</h1>
      <form onSubmit={handleSearch}>
        <label>
          <input type="text" ref={inputRef} />
        </label>
        <Button
          type="submit"
          testDataId="search"
          classes="top__section-button"
          title="Search"
        />
      </form>
    </div>
  );
}

export default SearchBar;
