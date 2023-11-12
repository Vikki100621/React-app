import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchProvider } from '../contexts/SearchContext';
import SearchPage from '../pages/searchPage';

test('Search component', () => {
  test('clicking the Search button saves the entered value to local storage', () => {
    render(
      <MemoryRouter>
        <SearchProvider>
          <SearchPage />
        </SearchProvider>
      </MemoryRouter>
    );
    const inputElement = screen.getByTestId('Input');
    const searchButton = screen.getByText('Search');
    fireEvent.change(inputElement, { target: { value: 'TestValue' } });
    fireEvent.click(searchButton);
    expect(localStorage.getItem('searchValue')).toBe('TestValue');
  });
});

test('component retrieves the value from local storage upon mounting', () => {
  localStorage.setItem('searchValue', 'StoredValue');

  render(
    <MemoryRouter>
      <SearchProvider>
        <SearchPage />
      </SearchProvider>
    </MemoryRouter>
  );
  waitFor(() => {
    const storedWord = screen.getByTestId('stored-keyword');
    expect(storedWord).toBe('StoredValue');
  });
});
