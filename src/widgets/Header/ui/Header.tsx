import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Header.module.scss'
import { Logo } from 'shared/ui/Logo/Logo'
import { ThemeToggleButton } from 'shared/ui/ThemeToggleButton/ThemeToggleButton'
import { Link } from 'react-router-dom'
import { routePath } from 'shared/config/routeConfig/routeConfig'

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
          <nav>
            <ul className={classNames(cls.navList)}>
              <li><Link to={routePath.main}>Главная</Link></li>
              <li><Link to={routePath.creator}>Создать</Link></li>
            </ul>
          </nav>
          <ThemeToggleButton/>
        </div>
      </div>
    </header>
  );
}
