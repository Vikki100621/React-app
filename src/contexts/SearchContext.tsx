/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { SearchState, initialSearchState } from '../interface/interface';
import { getDataFromApi } from '../API/api';
import { getPagesCount } from '../components/utils/pageCount';

export const SearchContext = createContext<{
  searchState: SearchState;
  setSearchState: React.Dispatch<React.SetStateAction<SearchState>>;
}>({
  searchState: initialSearchState,
  setSearchState: () => {},
});

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchState, setSearchState] = useState(initialSearchState);

  const fetchData = async (data: string) => {
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      isLoading: true,
      queryParam: data,
    }));
    setTimeout(async () => {
      const response = await getDataFromApi(
        data,
        searchState.limit,
        searchState.page
      );
      const responseData = response?.results;
      if (responseData) {
        const totalItems = response.totalResults;
        const pages = getPagesCount(totalItems, searchState.limit);
        setSearchState((prevSearchState) => ({
          ...prevSearchState,
          totalPages: pages,
          isResult: true,
          results: responseData,
        }));
      } else {
        setSearchState((prevSearchState) => ({
          ...prevSearchState,
          isResult: false,
        }));
      }
      setSearchState((prevSearchState) => ({
        ...prevSearchState,
        isLoading: false,
        inputValue: '',
      }));
    }, 0);
  };

  useEffect(() => {
    const searchQuery = localStorage.getItem('searchQuery');
    fetchData(searchQuery || 'salt');
  }, [searchState.limit, searchState.queryParam, searchState.page]);

  return (
    <SearchContext.Provider value={{ searchState, setSearchState }}>
      {children}
    </SearchContext.Provider>
  );
}
