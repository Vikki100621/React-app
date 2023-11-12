import { InputProps } from '../../interface/interface';

function Input(props: InputProps) {
  const { value, onChange, type } = props;
  return (
    <input data-testid="input" type={type} value={value} onChange={onChange} />
  );
}

export default Input;
