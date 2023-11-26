import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { describe, test, assert } from 'vitest';
import { HttpResponse, http } from 'msw';
import { mockResultsApi, mockResultsApiEmptyArr } from '../mocks/handlers';
import { server } from '../mocks/browser';
import { renderPage } from '../mocks/testUtils/render';

describe('Tests for the Card List component', async () => {
  afterEach(() => {
    cleanup();
  });

  test('items have length', async () => {
    server.use(
      http.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        async () => {
          return HttpResponse.json(mockResultsApi);
        }
      )
    );
    await renderPage();
    await waitFor(() => {
      const items = screen.getAllByTestId('card');
      assert.equal(items.length, 4);
    });

    await waitFor(() => {
      const selectElement = screen.getByTestId('select');
      fireEvent.change(selectElement, { target: { value: '10' } });
      assert.equal((selectElement as HTMLSelectElement).value, '10');
    });
    cleanup();
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
      assert.exists(noResultsMessage);
    });
  });
});
