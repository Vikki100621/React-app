/* eslint-disable import/no-extraneous-dependencies */
import { Provider } from 'react-redux';
import { act, render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import NotFound from '../../pages/404';
import { setupStore } from '../../store/store';
import SearchPage from '../../pages/page/[[...page]]';
import { createMockRouter } from './createMockRouter';
import { Pagination } from '../../components/pagination';

const store = setupStore();

export const renderPage = async (): Promise<void> => {
  await act(async () => {
    render(
      <Provider store={store}>
        <SearchPage />
      </Provider>
    );
  });
};
export const renderPagination = async (): Promise<void> => {
  await act(async () => {
    render(
      <RouterContext.Provider value={createMockRouter({ route: '/page/1?' })}>
        <Provider store={store}>
          <Pagination totalResults={30} />
        </Provider>
      </RouterContext.Provider>
    );
  });
};

export const renderPageWithBrokenRout = async (): Promise<void> => {
  await act(async () => {
    render(
      <RouterContext.Provider value={createMockRouter({ route: '/hfc' })}>
        <NotFound />
      </RouterContext.Provider>
    );
  });
};
