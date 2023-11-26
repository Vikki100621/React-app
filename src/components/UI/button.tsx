import { ButtonProps } from '../../interface/interface';

function Button(props: ButtonProps) {
  const { type, onClick, title, classes, children, testDataId } = props;
  const classNames = classes.split(' ').join(' ');
  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      data-testid={testDataId}
    >
      {children || title}
    </button>
  );
}

export default Button;
