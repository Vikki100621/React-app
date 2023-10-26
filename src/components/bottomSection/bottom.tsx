import React, { Component } from 'react';
import { AppState } from '../../interface/interface';

type BottomSectionProps = {
  searchResults: AppState[];
};

// eslint-disable-next-line react/prefer-stateless-function
class BottomSection extends Component<BottomSectionProps> {
  render() {
    const { searchResults } = this.props;
    return (
      <div className="bottom__section">
        <h2>Your results</h2>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              <h3>{result.title}</h3> <img src={result.images.original.url} alt={result.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BottomSection;
