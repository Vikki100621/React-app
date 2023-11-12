import { ChangeEvent, useContext, useEffect, useState } from 'react';
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
import { SearchContext } from '../contexts/SearchContext';
import { getReciepFromApi } from '../API/api';

function SearchPage() {
  const { searchState, setSearchState } = useContext(SearchContext);

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
    if (!queryParams.get('page') || searchState.page === 0) {
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
    if (searchState.inputValue === searchState.queryParam) {
      return;
    }
    if (searchState.inputValue === 'salt') {
      localStorage.setItem('searchQuery', 'salt');
    }
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      queryParam: inputValue,
    }));
  };

  const addRenderError = () => {
    searchState.isError = true;
  };

  const resetRenderError = () => {
    searchState.isError = false;
  };

  const handleLimitChange = (newLimit: string) => {
    handleQueryChange('page', 1);
    const limitNum = parseInt(newLimit, 10);
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      page: 0,
      limit: limitNum,
    }));
  };

  const changePage = (updetedPage: number) => {
    queryParams.delete('recipe');
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
    setdetailedPageState((prevSearchState) => ({
      ...prevSearchState,
      isItem: false,
    }));
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
      console.log(response);
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
