import { screen, waitFor } from '@testing-library/react';
import { assert } from 'vitest';
import { renderPageWithBrokenRout } from '../mocks/testUtils/render';

describe('404 component', () => {
  test('renders relevant data for each card', async () => {
    await renderPageWithBrokenRout();
    await waitFor(() => {
      const notFoundElement = screen.getByTestId('notFound');
      assert.exists(notFoundElement);
    });
  });
});
