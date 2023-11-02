import { ButtonProps } from '../../interface/interface';

function Button(props: ButtonProps) {
  const { onClick, title, classes } = props;
  const classNames = classes.split(' ').join(' ');
  return (
    <button type="button" className={classNames} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
