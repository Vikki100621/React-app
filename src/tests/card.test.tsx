import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mockResultsApi } from '../mocks/handlers';
import { SearchProvider } from '../contexts/SearchContext';
import SearchPage from '../pages/searchPage';
import { server } from '../mocks/browser';

test('renders relevant data for each card', async () => {
  render(
    <MemoryRouter>
      <SearchProvider>
        <SearchPage />
      </SearchProvider>
    </MemoryRouter>
  );

  await waitFor(() => {
    const items = screen.getAllByTestId('card');
    items.forEach((item, index) => {
      const { title, image } = mockResultsApi.results[index];
      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent(title);
      expect(item.querySelector('img')).toHaveAttribute('src', image);
    });
  });
});

test('opens a detailed card component', async () => {
  render(
    <MemoryRouter>
      <SearchProvider>
        <SearchPage />
      </SearchProvider>
    </MemoryRouter>
  );

  await waitFor(() => {
    const items = screen.getAllByTestId('card');
    items.forEach((item) => {
      expect(item).toBeInTheDocument();
      fireEvent.click(item);
      waitFor(() => {
        const detailedPage = screen.getByTestId('detailedPage');
        expect(detailedPage).toBeInTheDocument();
      });
    });
  });
});

test('triggers an additional API', async () => {
  render(
    <MemoryRouter>
      <SearchProvider>
        <SearchPage />
      </SearchProvider>
    </MemoryRouter>
  );

  await waitFor(() => {
    const items = screen.getAllByTestId('card');
    items.forEach((item) => {
      expect(item).toBeInTheDocument();
      fireEvent.click(items[0]);
      waitFor(() => {
        const detailedPage = screen.getByTestId('detailedPage');
        expect(detailedPage).toBeInTheDocument();
        const apiRequests = server.listHandlers();
        expect(apiRequests).toHaveLength(1);
      });
    });
  });
});
