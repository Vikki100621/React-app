import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import SearchPage from './pages/searchPage';
import PageId from './pages/detailedPage';
import { NotFound } from './pages/notFoundPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<SearchPage />} />
        <Route path="/:page" element={<SearchPage />} />
        <Route
          path="/:page/:id"
          element={
            <div className="wrapper">
              <div className="menu">
                <SearchPage />
              </div>
              <div className="information">
                <PageId />
              </div>
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
