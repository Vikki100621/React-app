import { DetailedPage, ResultsData } from '../../interface/interface';
import { AppStore, wrapper } from '../../store/store';
import Search from '../../components/search';
import {
  fetchAllRecipes,
  fetchRecipe,
  getRunningQueriesThunk,
} from '../../API/api';

interface SearchPageProps {
  allResults: ResultsData;
  detailesResult: DetailedPage | null;
}

function SearchPage({ allResults, detailesResult }: SearchPageProps) {
  return (
    <div id="root">
      <Search apiResult={allResults} apiResultDetails={detailesResult} />;
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store: AppStore) => async (context) => {
    const getPage = context.params?.page;
    const query = context.query.search;
    const limit = context.query.limit;
    const hasDetails = getPage?.includes('details');
    let page;
    let id;
    if (hasDetails && getPage?.length) {
      page = (Number(getPage[0]) - 1) * Number(limit);
      id = getPage[2];
    } else {
      page = (Number(getPage) - 1) * Number(limit);
    }
    const response = await store.dispatch(
      fetchAllRecipes.initiate({ query, limit, page })
    );
    const allResults: ResultsData = {
      results: response.data?.results || [],
      totalResults: response.data?.totalResults || 0,
    };
    let detailesResult = null;

    if (id) {
      const responseDetailes = await store.dispatch(fetchRecipe.initiate(id));
      detailesResult = responseDetailes.data as DetailedPage;
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {
        allResults,
        detailesResult: detailesResult !== undefined ? detailesResult : null,
      },
    };
  }
);
export default SearchPage;
