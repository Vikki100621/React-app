import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppState, DetailedPage } from '../interface/interface';
import Loader from '../components/UI/loader';
import SearchBar from '../components/searchBar';
import Catalog from '../components/catalog';
import ErrorBoundary from '../components/errorBoundary';
import Button from '../components/UI/button';
import { getDataFromApi, getReciepFromApi } from '../API/api';
import SelectComponent from '../components/UI/select';
import { getPagesCount } from '../components/utils/pageCount';
import { Pagination } from '../components/pagination';
import PageId from './detailedPage';
import { NotFound } from './notFoundPage';

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
  isItem: boolean;
  isLoadingItem: boolean;
  isItemResult: boolean;
  ItemResult: DetailedPage;
}

const initialSearchState: SearchState = {
  isError: false,
  inputValue: '',
  results: [],
  isLoading: false,
  queryParam: localStorage.getItem('searchQuery')!,
  isResult: true,
  page: 0,
  limit: 4,
  totalPages: 0,
  isItem: false,
  isLoadingItem: false,
  isItemResult: false,
  ItemResult: {},
};

function SearchPage() {
  const [searchState, setSearchState] =
    useState<SearchState>(initialSearchState);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const handleQueryChange = (param: string, value: number) => {
    queryParams.set(`${param}`, value.toString());
    navigate({ search: queryParams.toString() });
  };

  useEffect(() => {
    if (!queryParams.get('page') || searchState.page === 0) {
      handleQueryChange('page', 1);
    }
  }, []);

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
      console.log(responseData);
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

  const handleSearch = () => {
    handleQueryChange('page', 1);
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
    handleQueryChange('page', 1);
    const limitNum = parseInt(newLimit, 10);
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      limit: limitNum,
      page: 0,
    }));
  };

  const changePage = (updetedPage: number) => {
    handleQueryChange('page', updetedPage);
    let newPage = 0;
    switch (updetedPage) {
      case 1:
        newPage = 0;
        break;
      case 2:
        newPage = searchState.limit;
        break;
      default:
        newPage = (updetedPage - 1) * searchState.limit;
        break;
    }
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      page: newPage,
    }));
  };

  const handleItemClick = async (id: string) => {
    handleQueryChange('recipe', Number(id));
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      isLoadingItem: true,
      queryParam: id,
    }));
    setTimeout(async () => {
      const response = await getReciepFromApi(Number(id));
      if (response) {
        setSearchState((prevSearchState) => ({
          ...prevSearchState,
          isItemResult: response,
          isItem: true,
          isLoading: false,
        }));
      }
    });
  };
  const handleGoBack = () => {
    queryParams.delete('recipe');
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      isItem: false,
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
          handleItemClick={handleItemClick}
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
      {searchState.isLoadingItem ? (
        searchState.isItem ? (
          <Loader queryParam="kh" />
        ) : searchState.ItemResult ? (
          <PageId handleGoBack={handleGoBack} result={searchState.ItemResult} />
        ) : (
          <NotFound />
        )
      ) : null}
    </ErrorBoundary>
  );
}

export default SearchPage;
