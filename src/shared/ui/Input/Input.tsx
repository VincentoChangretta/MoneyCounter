import { useInput } from 'shared/hooks/useInput';
import cls from './Input.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { InputHTMLAttributes } from 'react';

export interface InputState {
  name: string;
  placeholder?: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  boxClassName?: string;
  classname?: string;
  inputState?: InputState;
  name: string;
}

export const Input = (props: InputProps) => {
  const { boxClassName, className, type, name, inputState, placeholder, ...otherProps } = props;
  const { value, onChange } = useInput();
  const inputType = type === '' ? 'text' : type;

  return (
    <div className={classNames(cls.inputBox, {}, [boxClassName])}>
      <input
        name={inputState?.name ? inputState.name : name}
        placeholder={inputState?.placeholder ? inputState.placeholder : placeholder}
        type={inputType}
        value={value}
        onChange={onChange}
        className={classNames(cls.input, {}, [className])}
        {...otherProps}
      />
    </div>
  );
};
