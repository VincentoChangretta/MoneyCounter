import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Logo.module.scss'

interface LogoProps{
    href: string
  className?: string
}

export const Logo = (props: LogoProps) => {
  const {href, className} = props
  return (
    <a href={href} className={classNames(cls.logo, {}, [className],)}>
      MC
    </a>
  );
}
