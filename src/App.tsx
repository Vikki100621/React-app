import { Component } from 'react';
import SearchPage from './pages/searchPage';
import ErrorBoundary from './components/error';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <SearchPage />
      </ErrorBoundary>
    );
  }
}

export default App;
