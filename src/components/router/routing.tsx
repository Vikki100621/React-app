import SearchPage from '../../pages/searchPage';
import PageId from '../../pages/detailedPage';

export const Routes = [
  { path: '/recipes/page=1', element: <SearchPage /> },
  { path: '/recipes/:id', element: <PageId /> },
  // { path: "*",  element: <NotFound />},
];
