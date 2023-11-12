import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Catalog from '../components/catalog';
import '@testing-library/jest-dom';
import { SearchProvider } from '../contexts/SearchContext';
import SearchPage from '../pages/searchPage';

test('fetches data and displays loader', async () => {
  render(
    <MemoryRouter>
      <SearchProvider>
        <SearchPage />
      </SearchProvider>
    </MemoryRouter>
  );

  await waitFor(() => {
    const items = screen.getAllByTestId('card');
    expect(items).toHaveLength(4);
  });
  const selectElement = screen.getByTestId('select');
  fireEvent.change(selectElement, { target: { value: '10' } });
  expect((selectElement as HTMLSelectElement).value).toBe('10');
});

test('displays "No results" when results array is empty', () => {
  render(
    <Catalog
      isResult
      queryParam="salt"
      results={[]}
      isError={false}
      handleItemClick={() => {}}
    />
  );

  const noResultsMessage = screen.getByText('No results');
  expect(noResultsMessage).toBeInTheDocument();
});
