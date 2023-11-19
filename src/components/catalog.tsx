/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useFetchAllRecipesQuery } from '../API/api';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { AppState, CatalogProps } from '../interface/interface';
import Loader from './UI/loader';
import ErrorBox from './error';
import {
  searchRequestFailed,
  searchSetLoading,
  searchSetTotalResults,
} from '../store/reducers/SearchSlice';

function Catalog({ handleItemClick }: CatalogProps) {
  const { page, queryParam, limit } = useAppSelector(
    (state) => state.searchReducer
  );
  const dispatch = useAppDispatch();
  const {
    data: resultsData,
    isError,
    isSuccess,
    isLoading,
  } = useFetchAllRecipesQuery({
    query: queryParam,
    limit,
    page,
  });

  useEffect(() => {
    if (resultsData) {
      dispatch(searchSetTotalResults(resultsData.totalResults));
    }
    if (isLoading) {
      dispatch(searchSetLoading(true));
    }
    if (!isSuccess) {
      dispatch(searchRequestFailed());
    }
  }, [isLoading, isSuccess, resultsData]);

  if (isError) {
    throw new Error('Test error to check ErrorBoundary');
  }

  if (isLoading) {
    return <Loader queryParam={queryParam} />;
  }

  if (!isSuccess) {
    return <ErrorBox errorText="Failed to fetch" />;
  }
  return resultsData.results.length ? (
    <div className="bottom__section">
      <h3>
        Recipes with{' '}
        <span data-testid="stored-keyword" className="query-param">
          {queryParam}
        </span>
      </h3>
      <ul>
        {resultsData.results.map((item: AppState) => (
          <li
            data-testid="card"
            id={item.id}
            key={item.id}
            onClick={() => handleItemClick(item.id)}
          >
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <ErrorBox errorText="No result with the requested parameters" />
  );
}

export default Catalog;
