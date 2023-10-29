import { Component } from 'react';
import { ButtonProps } from '../../interface/interface';

class Button extends Component<ButtonProps> {
  render() {
    const { onClick, title, classes } = this.props;
    const classNames = classes.split(' ').join(' ');
    return (
      <button className={classNames} type="button" onClick={onClick}>
        {title}
      </button>
    );
  }
}

export default Button;
