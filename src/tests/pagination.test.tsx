import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SearchProvider } from '../contexts/SearchContext';
import SearchPage from '../pages/searchPage';

test('Pagination updates URL query parameter when page changes', async () => {
  render(
    <MemoryRouter>
      <SearchProvider>
        <SearchPage />
      </SearchProvider>
    </MemoryRouter>
  );

  waitFor(async () => {
    const nextPageButton = screen.getByTestId('next-page');
    fireEvent.click(nextPageButton);
    expect(window.location.search).toEqual('?page=2');
  });
});
