import { ChangeEvent } from 'react';

export type AppState = {
  title: string;
  id: string;
  images: {
    original: {
      url: string;
    };
  };
  slug: string;
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
};

export type LoaderProps = {
  queryParam: string;
};

export type SearchBarProps = {
  inputValue: string;
  handleSearch: () => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
