import { Provider } from 'react-redux';
import { act, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { setupStore } from '../../store/store';
import App from '../../App';
import SearchPage from '../../pages/searchPage';

const store = setupStore();

export const renderPage = async (): Promise<void> => {
  await act(async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
};

export const renderPageWithBrokenRout = async (rout: string): Promise<void> => {
  await act(async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`${rout}`]}>
          <SearchPage />
        </MemoryRouter>
      </Provider>
    );
  });
};
