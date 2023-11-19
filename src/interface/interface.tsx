import { ChangeEvent } from 'react';

export type AppState = {
  title: string;
  id: string;
  image: string;
};

export type ResultsListProps = {
  handleItemClick: (id: string) => void;
};

export type InputProps = {
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type ButtonProps = {
  title: string | undefined;
  classes: string;
  onClick?: () => void;
  style?: {
    background: string;
  };
  disabled?: boolean;
  children?: React.ReactNode;
  testDataId?: string;
};

export type LoaderProps = {
  queryParam: string;
};

export type SearchBarProps = {
  inputValue: string;
  handleSearch: () => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type DetailedPage = {
  id?: number;
  title?: string;
  image?: string;
  readyInMinutes?: number;
  instructions?: string;
};

export type CatalogProps = {
  handleItemClick: (id: string) => void;
};

export type PageIdProps = {
  handleGoBack: () => void;
};

export type SearchState = {
  isError: boolean;
  inputValue: string;
  isLoading: boolean;
  queryParam: string;
  isResult: boolean;
  page: number;
  limit: number;
  totalResults: number;
};

type DetailedPageState = {
  isItem: boolean;
  isLoadingItem: boolean;
  isItemResult: boolean;
  ItemResult: DetailedPage;
};

export const initialSearchState: SearchState = {
  isError: false,
  inputValue: '',
  isLoading: false,
  queryParam: localStorage.getItem('searchQuery')! || 'fish',
  isResult: true,
  page: 0,
  limit: 4,
  totalResults: 0,
};

export const initialDetailedPageState: DetailedPageState = {
  isItem: false,
  isLoadingItem: false,
  isItemResult: false,
  ItemResult: {},
};

export interface SearchContextProps {
  searchState: SearchState;
  setSearchState: React.Dispatch<React.SetStateAction<SearchState>>;
}
