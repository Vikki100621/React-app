import {
  act,
  cleanup,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react';
import { mockResultsApi } from '../mocks/handlers';
import { server } from '../mocks/browser';
import { renderPage } from '../mocks/testUtils/render';

describe('Tests for the Cardcomponent', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders relevant data for each card', async () => {
    await renderPage();

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
    await renderPage();

    await waitFor(() => {
      const items = screen.getAllByTestId('card');
      items.forEach(async (item) => {
        expect(item).toBeInTheDocument();
        await act(() => fireEvent.click(items[0]));
      });
    });
    await waitFor(() => {
      const detailedPage = screen.getByTestId('detailedPage');
      expect(detailedPage).toBeInTheDocument();
    });
  });

  test('triggers an additional API', async () => {
    await renderPage();
    await waitFor(() => {
      const items = screen.getAllByTestId('card');
      items.forEach(async (item) => {
        expect(item).toBeInTheDocument();
        await act(() => fireEvent.click(items[0]));
      });
    });

    const apiRequests = server.listHandlers();
    expect(apiRequests).toHaveLength(2);
  });
});
