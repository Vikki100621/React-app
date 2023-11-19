import {
  act,
  cleanup,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react';
import { renderPage } from '../mocks/testUtils/render';

describe('pagination', () => {
  afterEach(() => {
    cleanup();
  });
  test('Pagination updates URL query parameter when page changes', async () => {
    await renderPage();

    await waitFor(async () => {
      const nextPageButton = screen.getByTestId('next-page');
      await act(() => fireEvent.click(nextPageButton));
    });
    expect(window.location.search).toEqual('?page=2');
    await waitFor(async () => {
      const nextPageButton = screen.getByTestId('next-page');
      await act(() => fireEvent.click(nextPageButton));
    });
    expect(window.location.search).toEqual('?page=3');
  });
});
