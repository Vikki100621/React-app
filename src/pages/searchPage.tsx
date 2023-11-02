import { ChangeEvent, useEffect, useState } from 'react';

import ApiService from '../API/api';
import { AppState } from '../interface/interface';
import Loader from '../components/UI/loader';
import SearchBar from '../components/searchBar';
import Catalog from '../components/catalog';
import ErrorBoundary from '../components/errorBoundary';
import Button from '../components/UI/button';

interface SearchState {
  isError: boolean;
  inputValue: string;
  results: AppState[];
  isLoading: boolean;
  queryParam: string;
  isResult: boolean;
}

const initialSearchState: SearchState = {
  isError: false,
  inputValue: '',
  results: [],
  isLoading: false,
  queryParam: '',
  isResult: true,
};

function SearchPage() {
  const [searchState, setSearchState] =
    useState<SearchState>(initialSearchState);

  const fetchData = async (data: string) => {
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      isLoading: true,
      queryParam: data,
    }));
    setTimeout(async () => {
      const response = await ApiService.search(data);
      const responseData = response.data;
      if (responseData.length === 0) {
        setSearchState((prevSearchState) => ({
          ...prevSearchState,
          isResult: false,
        }));
      } else {
        setSearchState((prevSearchState) => ({
          ...prevSearchState,
          isResult: true,
        }));
      }
      setSearchState((prevSearchState) => ({
        ...prevSearchState,
        results: responseData,
        isLoading: false,
        inputValue: '',
      }));
    }, 1000);
  };

  useEffect(() => {
    const searchQuery = localStorage.getItem('searchQuery');
    if (!searchQuery) {
      localStorage.setItem('searchQuery', 'all');
    }
    fetchData(searchQuery || 'all');
  }, []);

  const handleSearch = () => {
    localStorage.setItem('searchQuery', searchState.inputValue);
    if (searchState.inputValue === searchState.queryParam) {
      return;
    }
    if (searchState.inputValue === '') {
      localStorage.setItem('searchQuery', 'all');
    }
    fetchData(searchState.inputValue || 'all');
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      inputValue: value,
    }));
  };

  const addRenderError = () => {
    console.log('работаю');
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      isError: true,
    }));
    throw new Error('Simulated render error to check ErrorBoundary');
  };

  const resetRenderError = () => {
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      isError: false,
    }));
  };

  return (
    <ErrorBoundary catchError={resetRenderError}>
      <SearchBar
        inputValue={searchState.inputValue}
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
      />
      {searchState.isLoading ? (
        <Loader queryParam={searchState.queryParam} />
      ) : (
        <Catalog
          results={searchState.results}
          isResult={searchState.isResult}
          queryParam={searchState.queryParam}
          isError={searchState.isError}
        />
      )}
      <Button
        classes="top__section-button error"
        title="Error"
        onClick={addRenderError}
      />
    </ErrorBoundary>
  );
}

export default SearchPage;
