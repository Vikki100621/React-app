import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { SearchProvider } from '../contexts/SearchContext';
import SearchPage from '../pages/searchPage';

test('displays the 404 page when navigating to an invalid route', () => {
  const initialEntries = ['/'];

  test('404 page is displayed when navigating to an invalid route', () => {
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <SearchProvider>
          <SearchPage />
        </SearchProvider>
      </MemoryRouter>
    );
    const notFoundElement = screen.getByTestId('notFound');
    expect(notFoundElement).toBeInTheDocument();
  });
});
