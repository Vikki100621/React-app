import { DetailedPage, ResultsData } from 'interface/interface';
import { useRouter } from 'next/router';
import SearchBar from './searchBar';
import Catalog from './catalog';
import ErrorBoundary from './errorBoundary';
import Button from './UI/button';
import SelectComponent from './UI/select';
import { Pagination } from './pagination';
import Modal from './UI/modal';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setError, setIsItem } from '../store/reducers/pageSlice';
import PageId from './detailedPage';
import ErrorBox from './error';

interface SearchProps {
  apiResult: ResultsData;
  apiResultDetails: DetailedPage | null;
}

function Search({ apiResult, apiResultDetails }: SearchProps) {
  const dispatch = useAppDispatch();
  const { isError } = useAppSelector((state) => state.pageSlice);
  const router = useRouter();
  console.log(router.query.page);
  const details = router.query.page;
  const detail = details?.includes('details');

  const addRenderError = () => {
    dispatch(setError(true));
  };

  const resetRenderError = () => {
    dispatch(setError(true));
  };

  const handleClickGoBack = () => {
    dispatch(setIsItem(false));
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
              {detail ? <Modal onClose={() => handleClickGoBack()} /> : null}
              <Catalog resultsData={apiResult.results} />
              <Pagination totalResults={apiResult.totalResults} />
              <SelectComponent />
            </div>
            {detail ? (
              <PageId
                data={apiResultDetails}
                handleGoBack={handleClickGoBack}
              />
            ) : null}
          </div>
        </>
      )}
    </ErrorBoundary>
  );
}

export default Search;
