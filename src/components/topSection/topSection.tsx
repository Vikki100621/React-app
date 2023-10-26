import React, { Component, ChangeEvent } from 'react';

type InputProps = {
  onSearch: (text: string) => void;
};

type InputState = {
  inputValue: string;
};

class TopSection extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    this.setState({ inputValue: value });
    localStorage.setItem('searchQuery', value);
  };

  handleSearchClick = () => {
    const { inputValue } = this.state;
    const { onSearch } = this.props;
    onSearch(inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className="top__section">
        <input
          placeholder="Type searchQuery"
          className="top__section-input"
          top__section-buttontype="text"
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <button className="top__section-button" type="button" onClick={this.handleSearchClick}>
          Search
        </button>
      </div>
    );
  }
}

export default TopSection;
