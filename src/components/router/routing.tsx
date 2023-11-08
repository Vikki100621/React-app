import { createBrowserRouter } from 'react-router-dom';
import SearchPage from '../../pages/searchPage';
import { NotFound } from '../../pages/notFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <SearchPage />,
      },
    ],
  },
]);
