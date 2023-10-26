import React, { Component } from 'react';
import TopSection from './components/input/input';
import BottomSection from './components/bottomSection/bottom';
import ApiService from './API/api';
import { AppState } from './interface/interface';

class App extends Component<object, { searchResults: AppState[] }> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchResults: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = async () => {
    const filteredResults = await ApiService.getApiResult();
    this.setState({ searchResults: filteredResults });
  };

  render() {
    const { searchResults } = this.state;
    return (
      <>
        <h1>Search your GIF</h1>
        <TopSection onSearch={this.handleSearch} />
        <BottomSection searchResults={searchResults} />
      </>
    );
  }
}

export default App;
