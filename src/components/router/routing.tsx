import { createBrowserRouter } from 'react-router-dom';
import { NotFound } from '../../pages/notFoundPage';
import SearchPage from '../../pages/searchPage';

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
