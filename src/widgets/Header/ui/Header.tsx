import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Header.module.scss'
import { Logo } from 'shared/ui/Logo/Logo'
import { ThemeToggleButton } from 'shared/ui/ThemeToggleButton/ThemeToggleButton'

interface HeaderProps{
  className?: string
}

export const Header = (props: HeaderProps) => {
  const {className} = props
  return (
    <header className={classNames(cls.header, {}, [className],)}>
      <div className="container">
        <div className={classNames(cls.inner)}>
          <Logo href='#'/>
          <ThemeToggleButton/>
        </div>
      </div>
    </header>
  );
}
