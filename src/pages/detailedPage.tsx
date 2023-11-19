import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { NotFound } from './notFoundPage';
import Loader from '../components/UI/loader';
import { useAppDispatch } from '../hooks/redux';
import {
  detaildPageIsItemResult,
  detaildPageSetLoading,
} from '../store/reducers/DetailedPageSlice';
import { useFetchRecipeQuery } from '../API/api';
import { PageIdProps } from '../interface/interface';

function PageId(props: PageIdProps) {
  const { handleGoBack } = props;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('recipe');
  const { data, isSuccess, isLoading } = useFetchRecipeQuery(id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(detaildPageSetLoading(true));
    }

    if (isSuccess) {
      dispatch(detaildPageIsItemResult(true));
    }
  }, [isLoading, isSuccess, dispatch]);

  return isLoading ? (
    <Loader queryParam="details" />
  ) : (
    <div className="right-content">
      {isSuccess ? (
        <div data-testid="detailedPage" className="detailed-page special">
          <button
            data-testid="close"
            type="submit"
            onClick={() => handleGoBack()}
          >
            ❌
          </button>
          {data ? (
            <>
              <h2>{data.title}</h2>
              <span>Ready in {data.readyInMinutes}</span>
              <img src={data.image} alt={data.title} />
            </>
          ) : null}
        </div>
      ) : (
        <NotFound />
      )}
      <Outlet />
    </div>
  );
}

export default PageId;
