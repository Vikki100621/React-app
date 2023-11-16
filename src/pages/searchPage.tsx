/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../components/UI/loader';
import SearchBar from '../components/searchBar';
import Catalog from '../components/catalog';
import ErrorBoundary from '../components/errorBoundary';
import Button from '../components/UI/button';
import SelectComponent from '../components/UI/select';
import { Pagination } from '../components/pagination';
import PageId from './detailedPage';
import { NotFound } from './notFoundPage';
import Modal from '../components/UI/modal';
import { initialDetailedPageState } from '../interface/interface';
// import { useAppSelector } from '../hooks/redux';
// import { SearchContext } from '../contexts/SearchContext';
// import { updateInputValue } from '../store/reducers/SearchSlice';
import { getReciepFromApi } from '../API/api';
import {
  searchChangeLimit,
  searchChangePage,
  searchSetError,
} from '../store/reducers/SearchSlice';
import { useAppSelector } from '../hooks/redux';

function SearchPage() {
  const { page, queryParam } = useAppSelector((state) => state.searchReducer);

  const [inputValue, setInputValue] = useState('');
  const [detailedPageState, setdetailedPageState] = useState(
    initialDetailedPageState
  );

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const handleQueryChange = (param: string, value: number) => {
    queryParams.set(`${param}`, value.toString());
    navigate({ search: queryParams.toString() });
  };

  useEffect(() => {
    if (!queryParams.get('page') || page === 0) {
      handleQueryChange('page', 1);
    }
    queryParams.delete('recipe');
  }, []);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setInputValue(value);
  };

  const handleSearch = () => {
    handleQueryChange('page', 1);
    localStorage.setItem('searchQuery', inputValue);
    setInputValue(inputValue);

    if (inputValue === queryParam) {
      return;
    }
    if (inputValue === 'salt') {
      localStorage.setItem('searchQuery', 'salt');
    }
  };

  const addRenderError = () => {
    searchSetError(true);
  };

  const resetRenderError = () => {
    searchSetError(false);
  };

  const handleLimitChange = (newLimit: string) => {
    handleQueryChange('page', 1);
    const limitNum = parseInt(newLimit, 10);
    searchChangePage(0);
    searchChangeLimit(limitNum);
  };

  const handleItemClick = async (id: string) => {
    handleQueryChange('recipe', Number(id));
    setdetailedPageState((prevSearchState) => ({
      ...prevSearchState,
      isLoadingItem: true,
      isItem: true,
      queryParam: id,
    }));
    setTimeout(async () => {
      const response = await getReciepFromApi(Number(id));
      if (response) {
        setdetailedPageState((prevSearchState) => ({
          ...prevSearchState,
          isItemResult: true,
          ItemResult: response,
          isItem: true,
          isLoadingItem: false,
        }));
      } else {
        setdetailedPageState((prevSearchState) => ({
          ...prevSearchState,
          isItemResult: false,
        }));
      }
      setdetailedPageState((prevSearchState) => ({
        ...prevSearchState,
        isLoadingItem: false,
      }));
    });
  };

  const handleClickGoBack = () => {
    queryParams.delete('recipe');
    navigate({ search: queryParams.toString() });
    if (detailedPageState.isItem) {
      setdetailedPageState((prevSearchState) => ({
        ...prevSearchState,
        isItem: false,
      }));
    }
  };

  return (
    <ErrorBoundary catchError={resetRenderError}>
      <SearchBar
        inputValue={inputValue}
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
      />
      <div className="main__section">
        <div
          className={`left-content ${
            detailedPageState.isItem ? 'move-left' : ''
          }`}
        >
          {detailedPageState.isItem ? (
            <Modal onClose={() => handleClickGoBack()} />
          ) : null}

          <Catalog handleItemClick={handleItemClick} />

          <Button
            classes="top__section-button error"
            title="Error"
            onClick={addRenderError}
          />
          <Pagination />
          <SelectComponent onChange={handleLimitChange} />
        </div>
        <div className="right-content">
          {detailedPageState.isItem ? (
            detailedPageState.isLoadingItem ? (
              <Loader queryParam="details" />
            ) : detailedPageState.ItemResult ? (
              <PageId
                handleGoBack={handleClickGoBack}
                result={detailedPageState.ItemResult}
              />
            ) : (
              <NotFound />
            )
          ) : null}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default SearchPage;
