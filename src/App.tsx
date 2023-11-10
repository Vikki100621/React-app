import { RouterProvider } from 'react-router-dom';
import { router } from './components/router/routing';
import { SearchProvider } from './contexts/SearchContext';

function App() {
  return (
    <SearchProvider>
      <RouterProvider router={router} />;
    </SearchProvider>
  );
}

export default App;
