import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Header.module.scss'
import { Logo } from 'shared/ui/Logo/Logo'
import { ThemeToggleButton } from 'shared/ui/ThemeToggleButton/ThemeToggleButton'
import { Link } from 'react-router-dom'
import { routePath } from 'shared/config/routeConfig/routeConfig'
import { GROW_NO_BASIS } from 'app/styles/specialClasses/specialClasses'

interface HeaderProps{
  className?: string
}

export const Header = (props: HeaderProps) => {
  const {className} = props
  return (
    <header className={classNames(cls.header, {}, [className],)}>
      <div className="container">
        <div className={classNames(cls.inner)}>
          <Logo path={routePath.main} className={GROW_NO_BASIS}/>
          <div className={classNames(cls.functional, {}, [GROW_NO_BASIS])}>
            <nav>
              <ul className={classNames(cls.navList)}>
                <li><Link to={routePath.main}>Главная</Link></li>
                <li><Link to={routePath.creator}>Создать</Link></li>
              </ul>
            </nav>
            <ThemeToggleButton/>
          </div>
        </div>
      </div>
    </header>
  );
}
