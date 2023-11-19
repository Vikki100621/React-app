import {
  act,
  cleanup,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react';
import 'vitest-localstorage-mock';
import { renderPage } from '../mocks/testUtils/render';

const localStorageMock = (function createLocalStorageMock() {
  const store: Record<string, string> = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
const setLocalStorage = (id: string, data: string) => {
  window.localStorage.setItem(id, data);
};
describe('search component', () => {
  afterEach(() => {
    cleanup();
  });

  test('clicking the Search button saves the entered value to local storage', async () => {
    await renderPage();
    const inputElement = screen.getByTestId('input');
    const searchButton = screen.getByText('search');

    await act(() =>
      fireEvent.change(inputElement, { target: { value: 'TestValue' } })
    );

    await act(() => fireEvent.click(searchButton));

    await waitFor(() => {
      expect(localStorage.getItem('searchQuery')).toBe('TestValue');
      const storedWord = screen.getByTestId('stored-keyword');
      expect(storedWord.textContent).toEqual('TestValue');
    });
  });

  test('component retrieves the value from local storage upon mounting', async () => {
    const mockId = 'searchQuery';
    const mockJson = 'StoredValue';
    setLocalStorage(mockId, mockJson);
    expect(localStorage.getItem(mockId)).toEqual(mockJson);
    await renderPage();
    expect(localStorage.getItem('searchQuery')).toEqual('StoredValue');
  });
});
