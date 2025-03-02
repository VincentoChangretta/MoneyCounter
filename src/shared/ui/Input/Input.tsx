import { useInput } from 'shared/hooks/useInput'
import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { InputHTMLAttributes } from 'react'


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  boxClassName?: string,
  classname?: string
}

export const Input = (props: InputProps) => {
  const {boxClassName, className, type = "text",  ...otherProps} = props
  const {value, onChange} = useInput()

  const inputType = type === "" ? "text" : type;
  return (
    <div className={classNames(cls.inputBox, {}, [boxClassName],)}>
      <input 
        type={inputType}
        value={value} 
        onChange={onChange} 
        className={classNames(cls.input, {}, [className],)}
        {...otherProps}
      />
    </div>
  );
}
