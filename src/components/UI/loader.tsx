import { Component } from 'react';
import { LoaderProps } from '../../interface/interface';

class Loader extends Component<LoaderProps> {
  render() {
    const { queryParam } = this.props;
    return (
      <>
        <h3>
          Searching for <span className="query-param">{queryParam} GIFS</span>
        </h3>
        <div className="loader" />
      </>
    );
  }
}

export default Loader;
