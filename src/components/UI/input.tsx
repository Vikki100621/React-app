import { Component } from 'react';
import { InputProps } from '../../interface/interface';

class Input extends Component<InputProps> {
  render() {
    const { value, onChange, type } = this.props;
    return <input type={type} value={value} onChange={onChange} />;
  }
}

export default Input;
