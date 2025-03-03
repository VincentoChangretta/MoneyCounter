import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Logo.module.scss';
import { Link } from 'react-router-dom';

interface LogoProps {
  path: string;
  className?: string;
}

export const Logo = (props: LogoProps) => {
  const { path, className } = props;

  return (
    <Link to={path} className={classNames(cls.logo, {}, [className])}>
      SpendSmart
    </Link>
  );
};
