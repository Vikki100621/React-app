import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchProvider } from '../contexts/SearchContext';
import SearchPage from '../pages/searchPage';
import { mockApiResponse } from '../mocks/handlers';

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
    items.forEach((item) => {
      expect(item).toBeInTheDocument();
      fireEvent.click(items[0]);
      const loaderElement = screen.getByTestId('loader');
      expect(loaderElement).toBeInTheDocument();
    });
  });
});

test('card component correctly displays the detailed card data', async () => {
  render(
    <MemoryRouter>
      <SearchProvider>
        <SearchPage />
      </SearchProvider>
    </MemoryRouter>
  );

  await waitFor(async () => {
    const items = screen.getAllByTestId('card');

    items.forEach((item) => {
      const idAttribute = item.getAttribute('id');
      if (idAttribute === '1') {
        fireEvent.click(item);

        waitFor(() => {
          const detailedPage = screen.getByTestId('detailedPage');
          expect(detailedPage).toBeInTheDocument();
          expect(item).toHaveTextContent(mockApiResponse.title);
          expect(item.querySelector('img')).toHaveAttribute(
            'src',
            mockApiResponse.image
          );
        });
      }
    });
  });
});

test('clicking the close button hides the component', async () => {
  render(
    <MemoryRouter>
      <SearchProvider>
        <SearchPage />
      </SearchProvider>
    </MemoryRouter>
  );

  await waitFor(async () => {
    const items = screen.getAllByTestId('card');

    items.forEach((item) => {
      const idAttribute = item.getAttribute('id');
      if (idAttribute === '1') {
        fireEvent.click(item);

        waitFor(() => {
          const detailedPage = screen.getByTestId('detailedPage');
          expect(detailedPage).toBeInTheDocument();
          const closeButton = screen.getByTestId('close');
          expect(closeButton).toBeInTheDocument();
          fireEvent.click(closeButton);
          const modalComponent = screen.queryByTestId('modal-component');
          expect(modalComponent).not.toBeInTheDocument();
        });
      }
    });
  });
});
