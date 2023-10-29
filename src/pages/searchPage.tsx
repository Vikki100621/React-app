/* eslint-disable no-nested-ternary */
import { ChangeEvent, Component } from 'react';

import ApiService from '../API/api';
import { BottomSectionState, SearchPageProps } from '../interface/interface';
import Input from '../components/UI/input';
import Button from '../components/UI/button';
import ResultsList from '../components/resultList';
import Loader from '../components/UI/loader';

class SearchPage extends Component<SearchPageProps, BottomSectionState> {
  constructor(props: SearchPageProps) {
    super(props);
    this.state = {
      inputValue: '',
      results: [],
      isLoading: false,
      queryParam: '',
      searchQuery: localStorage.getItem('searchQuery'),
      isResult: true,
    };
  }

  async componentDidMount() {
    const { searchQuery } = this.state;
    if (!searchQuery) {
      localStorage.setItem('searchQuery', 'all');
    }
    await this.fetchData(searchQuery || 'all');
  }

  async handleSearch() {
    const { inputValue, queryParam } = this.state;
    localStorage.setItem('searchQuery', inputValue);
    if (inputValue === queryParam) {
      return;
    }
    if (inputValue === '') {
      localStorage.setItem('searchQuery', 'all');
    }
    this.fetchData(inputValue || 'all');
  }

  handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    this.setState({ inputValue: value });
  };

  async fetchData(queryParam: string) {
    this.setState({ isLoading: true });
    this.setState({ queryParam });
    setTimeout(async () => {
      const response = await ApiService.search(queryParam);
      const responseData = response.data;
      if (responseData.length === 0) {
        this.setState({ isResult: false });
      } else {
        this.setState({ isResult: true });
      }
      this.setState({ results: responseData });
      this.setState({ isLoading: false });
      this.setState({ inputValue: '' });
    }, 1000);
  }

  render() {
    const { inputValue, results, isLoading, queryParam, isResult } = this.state;
    return (
      <>
        <div className="top__section">
          <h1>Search your GIF</h1>
          <Input type="text" value={inputValue} onChange={this.handleInputChange} />
          <Button
            classes="top__section-button"
            title="search"
            onClick={() => {
              this.handleSearch();
            }}
          />
        </div>
        <div className="bottom__section">
          {isLoading ? (
            <Loader queryParam={queryParam} />
          ) : isResult ? (
            <>
              <h3>
                <span className="query-param">{queryParam}</span> GIFS
              </h3>
              <ResultsList results={results} />
            </>
          ) : (
            <>
              <h3>
                <span className="query-param">{queryParam}</span> GIFS
              </h3>
              <div className="not-results">
                <h3>No results</h3>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default SearchPage;
