import { ChangeEvent } from 'react';

export type AppState = {
  title: string;
  id: string;
  image: string;
};

export type ResultsListProps = {
  results: AppState[];
  handleItemClick: (id: string) => void;
};

export type BottomSectionState = {
  inputValue: string;
  results: AppState[];
  isLoading: boolean;
  queryParam: string;
  searchQuery: string | null;
  isResult: boolean;
};

export type InputProps = {
  type: string;
  value: string;
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
};

export type LoaderProps = {
  queryParam: string;
};

export type SearchBarProps = {
  inputValue: string;
  handleSearch: () => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type PaginationProps = {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
};

export type DetailedPage = {
  id?: number;
  title?: string;
  image?: string;
  readyInMinutes?: number;
  instructions?: string;
};

export type CatalogProps = {
  isResult: boolean;
  isError: boolean;
  queryParam: string;
  results: AppState[];
  handleItemClick: (id: string) => void;
};

export type PageIdProps = {
  result: DetailedPage;
  handleGoBack: () => void;
};

type SearchState = {
  isError: boolean;
  inputValue: string;
  results: AppState[];
  isLoading: boolean;
  queryParam: string;
  isResult: boolean;
  page: number;
  limit: number;
  totalPages: number;
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
  results: [],
  isLoading: false,
  queryParam: localStorage.getItem('searchQuery')!,
  isResult: true,
  page: 0,
  limit: 4,
  totalPages: 0,
};

export const initialDetailedPageState: DetailedPageState = {
  isItem: false,
  isLoadingItem: false,
  isItemResult: false,
  ItemResult: {},
};
