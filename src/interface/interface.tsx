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
  type?: 'button' | 'submit' | 'reset' | undefined;
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
export type ResultsData = {
  totalResults: number;
  results: AppState[];
};

export type TotalResults = {
  totalResults: number;
};
export type CatalogProps = {
  resultsData: AppState[];
};

export type PageIdProps = {
  handleGoBack: () => void;
  data: DetailedPage | null;
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

// export const initialSearchState: SearchState = {
//   isError: false,
//   inputValue: '',
//   isLoading: false,
//   queryParam: 'fish',
//   isResult: true,
//   page: 0,
//   limit: 4,
//   totalResults: 0,
// };

export interface SearchContextProps {
  searchState: SearchState;
  setSearchState: React.Dispatch<React.SetStateAction<SearchState>>;
}
