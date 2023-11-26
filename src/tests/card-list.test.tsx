import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { describe, test, assert, vi } from 'vitest';
import { useRouter } from 'next/router';
import SearchPage from 'pages/page/[[...page]]';
import { mockResultsApi, mockResultsApiEmptyArr } from '../mocks/handlers';
import { renderPage } from '../mocks/testUtils/render';

vi.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/',
    query: {},
    push: vi.fn().mockImplementation(async () => ({ success: true })),
  }),
}));
describe('Tests for the Card List component', async () => {
  test('items have length', async () => {
    // await renderPage(mockResultsApi, null, '/page/1?search=fish&limit=4');
    await render(
      <SearchPage allResults={mockResultsApi} detailesResult={null} />
    );
    await waitFor(() => {
      const items = screen.getAllByTestId('card');
      assert.equal(items.length, 4);
    });

    await waitFor(() => {
      const selectElement = screen.getByTestId('select');
      fireEvent.change(selectElement, { target: { value: '10' } });
      assert.equal((selectElement as HTMLSelectElement).value, '10');
    });
    await waitFor(() => {
      useRouter().push('/page/1?search=fish&limit=10');
    });

    await waitFor(() => {
      expect(useRouter().push).toHaveBeenCalledWith(
        '/page/1?search=fish&limit=10'
      );
    });

    cleanup();
  });

  test('verify empty array', async () => {
    await renderPage(
      mockResultsApiEmptyArr,
      null,
      '/page/1?search=ffv&limit=4'
    );
    await waitFor(() => {
      const noResultsMessage = screen.getByText(
        'No result with the requested parameters'
      );
      assert.isDefined(noResultsMessage);
    });
  });

  cleanup();
});
