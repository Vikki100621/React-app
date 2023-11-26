// import { DetailedPage, ResultsData } from 'interface/interface';
import { useRouter } from 'next/router';
import { AppState } from '../interface/interface';
import { useFetchAllRecipesQuery } from '../API/api';
import SearchBar from './searchBar';
import Catalog from './catalog';
import ErrorBoundary from './errorBoundary';
import Button from './UI/button';
import SelectComponent from './UI/select';
import { Pagination } from './pagination';
import Modal from './UI/modal';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setError } from '../store/reducers/pageSlice';
import ErrorBox from './error';
import PageId from './detailedPage';

function Search() {
  const dispatch = useAppDispatch();
  const { isError } = useAppSelector((state) => state.pageSlice);
  const router = useRouter();
  const { page, search, limit } = router.query;
  const detail = page?.includes('details');

  const id = page?.length ? page[2] : '';
  const pageNum = page?.length ? page[0] : '';
  const pageQuery = (Number(pageNum) - 1) * Number(limit);
  const { data } = useFetchAllRecipesQuery({
    query: search,
    limit,
    page: pageQuery,
  });
  const resultarr = data?.results as AppState[];
  const numbers = data?.totalResults as number;
  const addRenderError = () => {
    dispatch(setError(true));
  };

  const resetRenderError = () => {
    dispatch(setError(true));
  };

  const handleClickGoBack = () => {
    const newQuery = { ...router.query };
    newQuery.page = newQuery.page?.slice(0, -2);
    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  return (
    <ErrorBoundary catchError={resetRenderError}>
      {isError ? (
        <ErrorBox errorText="Oh no, something went wrong..." />
      ) : (
        <>
          <SearchBar />
          <Button
            classes="top__section-button error"
            title="Error"
            onClick={addRenderError}
          />
          <div className="main__section">
            <div className={`left-content ${detail ? 'move-left' : ''}`}>
              {detail === true && <Modal onClose={() => handleClickGoBack()} />}
              <Catalog results={resultarr} />
              <Pagination totalResults={numbers} />
              <SelectComponent />
            </div>
            {detail === true && (
              <PageId handleGoBack={handleClickGoBack} id={id} />
            )}
          </div>
        </>
      )}
    </ErrorBoundary>
  );
}

export default Search;
