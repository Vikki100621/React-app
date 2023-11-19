import { cleanup, screen } from '@testing-library/react';

import { renderPageWithBrokenRout } from '../mocks/testUtils/render';

describe('404 component', () => {
  afterEach(() => {
    cleanup();
  });
  test('displays the 404 page when navigating to an invalid route', () => {
    const initialEntries = '/';

    test('404 page is displayed when navigating to an invalid route', () => {
      renderPageWithBrokenRout(initialEntries);
      const notFoundElement = screen.getByTestId('notFound');
      expect(notFoundElement).toBeInTheDocument();
    });
  });

  test('displays the 404 page when navigating to an invalid route', () => {
    const initialEntries = '/some';

    test('404 page is displayed when navigating to an invalid route', () => {
      renderPageWithBrokenRout(initialEntries);
      const notFoundElement = screen.getByTestId('notFound');
      expect(notFoundElement).toBeInTheDocument();
    });
  });
});
