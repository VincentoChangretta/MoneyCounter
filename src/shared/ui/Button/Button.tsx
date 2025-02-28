import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, ReactNode } from 'react';

export enum ButtonTheme {
    OUTLINE = "outline",
    OUTLINE_RADIUS = "outlineRadius",
    FULL = "full",
    FULL_RADIUS = "fullRadius",
    SQUARE = "square",
    CIRCLE = "circle",
    TOGGLE_THEME="toggleTheme",
} 

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  children: ReactNode,
  theme: ButtonTheme,
}

export const Button = (props: ButtonProps) => {
  const { children, className, theme, ...otherProps} = props
  const mods: Record<string, boolean | string> = {
    [cls[theme]]: true
  }

  return (
    <button className={classNames(cls.button, mods, [className],)} {...otherProps}>
      {children}
    </button>
  );

}

