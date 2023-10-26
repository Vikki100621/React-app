import React, { Component } from 'react';

import { AppState } from '../../interface/interface';

type BottomSectionProps = {
  searchResults: AppState[];
};

type BottomSectionState = {
  searchResults: AppState[];
};

class BottomSection extends Component<BottomSectionProps, BottomSectionState> {
  constructor(props: BottomSectionProps) {
    super(props);
    this.state = {
      searchResults: [],
    };
  }

  render() {
    const { searchResults } = this.state;
    return (
      <div className="bottom__section">
        <h2>Your results</h2>
        <ul>
          {searchResults.map((result) => (
            <li key={result.title}>
              <h3>{result.title}</h3> <img src={result.images.original.url} alt={result.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BottomSection;
