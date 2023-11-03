import { ChangeEvent } from 'react';

export type AppState = {
  title: string;
  id: string;
  image: string;
};

export type ResultsListProps = {
  results: AppState[];
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
  title: string;
  classes: string;
  onClick: () => void;
  style?: {
    background: string;
  };
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
