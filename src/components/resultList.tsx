import { Component } from 'react';
import { AppState } from '../interface/interface';

class ResultsList extends Component<{ results: AppState[] }> {
  render() {
    const { results } = this.props;
    return (
      <ul>
        {results.map((item: AppState) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.images.original.url} alt={item.title} />
          </li>
        ))}
      </ul>
    );
  }
}

export default ResultsList;
