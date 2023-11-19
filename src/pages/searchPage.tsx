/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import SearchBar from '../components/searchBar';
import Catalog from '../components/catalog';
import ErrorBoundary from '../components/errorBoundary';
import Button from '../components/UI/button';
import SelectComponent from '../components/UI/select';
import { Pagination } from '../components/pagination';
import PageId from './detailedPage';
import Modal from '../components/UI/modal';
import {
  searchChangePage,
  searchSetError,
} from '../store/reducers/SearchSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import {
  detaildPageIsItemResult,
  detaildPageSetIsItem,
} from '../store/reducers/DetailedPageSlice';

function SearchPage() {
  const { isItem } = useAppSelector((state) => state.detailedPagereducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const handleQueryChange = (param: string, value: number) => {
    queryParams.set(`${param}`, value.toString());
    navigate({ search: queryParams.toString() });
  };

  useEffect(() => {
    const pageUrl = queryParams.get('page');
    if (pageUrl) {
      dispatch(searchChangePage(pageUrl));
    }
    const recipeParamUrl = queryParams.get('recipe');

    if (recipeParamUrl) {
      dispatch(detaildPageSetIsItem(true));
    }
  }, [location.search]);

  const addRenderError = () => {
    dispatch(searchSetError(true));
  };

  const resetRenderError = () => {
    dispatch(searchSetError(false));
  };

  const handleItemClick = async (id: string) => {
    handleQueryChange('recipe', Number(id));
  };

  const handleClickGoBack = () => {
    dispatch(detaildPageSetIsItem(false));
    dispatch(detaildPageIsItemResult(false));
    queryParams.delete('recipe');
    navigate({ search: queryParams.toString() });
  };

  return (
    <ErrorBoundary catchError={resetRenderError}>
      <SearchBar />
      <div className="main__section">
        <div className={`left-content ${isItem ? 'move-left' : ''}`}>
          {isItem ? <Modal onClose={() => handleClickGoBack()} /> : null}
          <Catalog handleItemClick={handleItemClick} />
          <Button
            classes="top__section-button error"
            title="Error"
            onClick={addRenderError}
          />
          <Pagination />
          <SelectComponent />
        </div>
        {isItem ? <PageId handleGoBack={handleClickGoBack} /> : null}
      </div>
    </ErrorBoundary>
  );
}

export default SearchPage;
