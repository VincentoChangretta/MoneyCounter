import React, { useEffect, useRef, useState } from 'react';
import cls from './Select.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { InputState } from '../Input/Input';

export interface SelectListItem {
  name: string;
  placeholder: string;
  item: string;
}

export enum SelectSize {
  SMALL = 'sizeSmall',
  MIDDLE = 'sizeMiddle',
  LARGE = 'sizeLarge',
  CONTENT = 'sizeContent',
}

interface SelectProps {
  className?: string;
  selectList: SelectListItem[];
  selectActiveItem: string | number;
  size: SelectSize;
  inputState: InputState;
  changePlaceholder?: boolean;
  inputChanger?: (obj: InputState) => void;
}

export const Select = (props: SelectProps) => {
  const {
    selectList,
    selectActiveItem,
    size,
    className,
    inputState,
    changePlaceholder,
    inputChanger,
  } = props;
  const [activeItem, setActiveItem] = useState(selectActiveItem);
  const [isActive, setIsActive] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSetActive = () => {
    setIsActive(prev => !prev);
  };

  const handleSetActiveItem = (e: React.MouseEvent, listItem: SelectListItem) => {
    e.stopPropagation();
    setActiveItem(listItem.item);
    setIsActive(false);
    if (setIsActive) {
      // если не передан changePlaceholder то Select не будет менять placeholder в Input
      if (changePlaceholder) {
        inputChanger({
          name: listItem.item.toString(),
          placeholder: listItem.placeholder,
        });
      } else {
        inputChanger({ ...inputState, name: listItem.item.toString() });
      }
    }
  };

  useEffect(() => {
    const handleSelectCloser = (e: Event) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsActive(false);
      }
    };
    document.addEventListener('click', handleSelectCloser);
    return () => document.removeEventListener('click', handleSelectCloser);
  }, []);

  const selectMods: Record<string, boolean | string> = {
    [cls[size]]: true,
    [cls[className]]: true,
  };

  const selectListMods: Record<string, boolean | string> = {
    [cls.active]: isActive,
  };

  return (
    <div
      ref={selectRef}
      className={classNames(cls.select, selectMods, [])}
      onClick={handleSetActive}
    >
      <div>{activeItem}</div>
      <ul className={classNames(cls.selectList, selectListMods, [])}>
        {selectList.map((listItem, index) => (
          <li
            key={listItem.name}
            onClick={e => handleSetActiveItem(e, listItem)}
            className={classNames(
              cls.selectListItem,
              { [cls.lastItem]: selectList.length - 1 === index },
              [],
            )}
          >
            {listItem.item}
          </li>
        ))}
      </ul>
    </div>
  );
};
