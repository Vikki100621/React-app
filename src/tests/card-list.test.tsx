import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe } from 'vitest';
import { HttpResponse, http } from 'msw';
import { renderPage } from '../mocks/testUtils/render';
import { mockResultsApiEmptyArr } from '../mocks/handlers';
import { server } from '../mocks/browser';

describe('Tests for the Card List component', () => {
  afterEach(() => {
    cleanup();
  });

  test('verify that the component renders the specified number of cards', async () => {
    await renderPage();

    await waitFor(() => {
      const items = screen.getAllByTestId('card');
      expect(items).toHaveLength(4);
    });

    await waitFor(() => {
      const selectElement = screen.getByTestId('select');
      fireEvent.change(selectElement, { target: { value: '10' } });
      expect((selectElement as HTMLSelectElement).value).toBe('10');
      const items = screen.getAllByTestId('card');
      expect(items).toHaveLength(10);
    });
  });

  test('verify empty array', async () => {
    server.use(
      http.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        async () => {
          return HttpResponse.json(mockResultsApiEmptyArr);
        }
      )
    );
    await renderPage();
    await waitFor(() => {
      const noResultsMessage = screen.getByText(
        'No result with the requested parameters'
      );
      expect(noResultsMessage).toBeInTheDocument();
    });
  });
});
