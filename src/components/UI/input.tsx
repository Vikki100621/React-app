import { useAppSelector } from '../../hooks/redux';
import { InputProps } from '../../interface/interface';

function Input(props: InputProps) {
  const { onChange, type } = props;
  const { inputValue } = useAppSelector((state) => state.searchReducer);
  return (
    <input
      data-testid="input"
      type={type}
      value={inputValue}
      onChange={onChange}
    />
  );
}

export default Input;
