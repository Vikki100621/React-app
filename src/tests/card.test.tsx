import { screen, waitFor, act, fireEvent } from '@testing-library/react';
import { assert } from 'vitest';
import { HttpResponse, http } from 'msw';
import { mockResultsApi } from '../mocks/handlers';
import { renderPage } from '../mocks/testUtils/render';
import { server } from '../mocks/browser';

describe('Tests for the Cardcomponent', () => {
  test('renders relevant data for each card', async () => {
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
      items.forEach((item, index) => {
        const { title } = mockResultsApi.results[index];
        assert.exists(item);
        assert.include(item.textContent, title);
      });
    });
  });

  test('triggers an additional API', async () => {
    await renderPage();
    await waitFor(() => {
      const items = screen.getAllByTestId('card');
      items.forEach(async (item) => {
        assert.exists(item);
        await act(() => fireEvent.click(item));
      });
    });

    const apiRequests = server.listHandlers();
    expect(apiRequests).toHaveLength(2);
  });
});
