import { useCallback, useState } from 'react';
import { Input, InputState } from '../Input/Input';
import { Select, SelectListItem, SelectSize } from '../Select/Select';
import cls from './InputWithSelect.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface InputWithSelectProps {
  name: string;
  placeholder: string;
  size: SelectSize;
  selectList: SelectListItem[];
  selectActiveItem: string | number;
  className?: string;
  changePlaceholder?: boolean;
}

export const InputWithSelect = (props: InputWithSelectProps) => {
  const { name, placeholder, selectActiveItem, selectList, size, changePlaceholder, className } =
    props;
  const [inputState, setInputState] = useState<InputState>({
    name,
    placeholder,
  });

  const handleInputState = useCallback(
    (obj: InputState) => {
      setInputState(obj);
    },
    [inputState, setInputState],
  );

  return (
    <div className={classNames(cls.inputWithSelectBox, {}, [className])}>
      <Input inputState={inputState} name="" />
      <Select
        className={'inInput'}
        size={size}
        selectList={selectList}
        selectActiveItem={selectActiveItem}
        changePlaceholder={changePlaceholder}
        inputState={inputState}
        inputChanger={handleInputState}
      />
    </div>
  );
};
