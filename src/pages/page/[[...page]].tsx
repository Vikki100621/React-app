import { AppStore, wrapper } from '../../store/store';
import Search from '../../components/search';
import {
  fetchAllRecipes,
  fetchRecipe,
  getRunningQueriesThunk,
} from '../../API/api';

function SearchPage() {
  return (
    <div id="root">
      <Search />;
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store: AppStore) => async (context) => {
    const getPage = context.params?.page;
    const queryParam = context.query.search;
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
    await store.dispatch(
      fetchAllRecipes.initiate({ query: queryParam, limit, page })
    );

    if (id) {
      await store.dispatch(fetchRecipe.initiate(id));
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);
export default SearchPage;
