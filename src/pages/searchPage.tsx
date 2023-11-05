import { ChangeEvent, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { AppState } from '../interface/interface';
import Loader from '../components/UI/loader';
import SearchBar from '../components/searchBar';
import Catalog from '../components/catalog';
import ErrorBoundary from '../components/errorBoundary';
import Button from '../components/UI/button';
import { getDataFromApi } from '../API/api';
import SelectComponent from '../components/UI/select';
import { getPagesCount } from '../components/utils/pageCount';
import { Pagination } from '../components/pagination';

interface SearchState {
  isError: boolean;
  inputValue: string;
  results: AppState[];
  isLoading: boolean;
  queryParam: string;
  isResult: boolean;
  page: number;
  limit: number;
  totalPages: number;
}

const initialSearchState: SearchState = {
  isError: false,
  inputValue: '',
  results: [],
  isLoading: false,
  queryParam: localStorage.getItem('searchQuery')!,
  isResult: true,
  page: 1,
  limit: 4,
  totalPages: 0,
};

function SearchPage() {
  // const params = useParams();
  const [searchState, setSearchState] =
    useState<SearchState>(initialSearchState);

  const fetchData = async (data: string) => {
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      isLoading: true,
      queryParam: data,
    }));
    setTimeout(async () => {
      const { limit, page } = searchState;
      const response = await getDataFromApi(data, limit, page);
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
    }, 1000);
  };

  useEffect(() => {
    const searchQuery = localStorage.getItem('searchQuery');
    if (!searchQuery) {
      localStorage.setItem('searchQuery', 'salt');
    }
    fetchData(searchQuery || 'salt');
  }, []);

  const handleSearch = () => {
    localStorage.setItem('searchQuery', searchState.inputValue);
    if (searchState.inputValue === searchState.queryParam) {
      return;
    }
    if (searchState.inputValue === 'salt') {
      localStorage.setItem('searchQuery', 'salt');
    }
    fetchData(searchState.inputValue || 'salt');
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      inputValue: value,
      page: 0,
    }));
  };

  const addRenderError = () => {
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      isError: true,
    }));
  };

  const resetRenderError = () => {
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      isError: false,
    }));
  };

  const handleLimitChange = (newLimit: string) => {
    const limitNum = parseInt(newLimit, 10);
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      limit: limitNum,
      page: 0,
    }));
  };

  useEffect(() => {
    fetchData(searchState.queryParam);
  }, [searchState.totalPages, searchState.page]);

  useEffect(() => {
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      totalPages: 0,
    }));
    fetchData(searchState.queryParam);
  }, [searchState.limit, searchState.queryParam]);

  const changePage = (page: number) => {
    let pageNum: number;
    if (page === 1) {
      pageNum = 0;
    } else if (page === 2) {
      pageNum = searchState.limit;
    } else {
      pageNum = (page - 1) * searchState.limit;
    }
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      page: pageNum,
    }));
  };

  // useEffect(() => {
  //   let urlPage: number;
  //   if (params.page) {
  //     const arrPage = params.page.split('');
  //     urlPage = Number(arrPage[5]);
  //   } else {
  //     urlPage = 1;
  //   }
  //   setSearchState((prevSearchState) => ({
  //     ...prevSearchState,
  //     page: (urlPage - 1) * prevSearchState.limit,
  //   }));
  // }, [params.page]);

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
      <Pagination
        totalPages={searchState.totalPages}
        changePage={changePage}
        page={searchState.page}
      />
      <SelectComponent onChange={handleLimitChange} />
    </ErrorBoundary>
  );
}

export default SearchPage;
