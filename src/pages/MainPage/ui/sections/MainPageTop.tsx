import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './MainPageTop.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { MARGIN_X_AUTO } from 'app/styles/specialClasses/specialClasses';
import { Link } from 'react-router-dom';
import { routePath } from 'shared/config/routeConfig/routeConfig';

interface MainPageTopProps {
  className?: string;
}

export const MainPageTop = ({ className }: MainPageTopProps) => {
  return (
    <section className={classNames(cls.MainPageTop, {}, [className])}>
      <div className={cls.titleBox}>
        <h1 className="main-title">SpendSmart — ваш надежный инструмент для управления бюджетом</h1>
        <div>
          <p>
            Удобный и эффективный инструмент для учета доходов и расходов. Достигайте финансовой
            стабильности с полным контролем над бюджетом с помощью нас
          </p>
        </div>
      </div>
      <Link to={routePath.creator}>
        <Button theme={ButtonTheme.FULL_RADIUS} className={MARGIN_X_AUTO}>
          Начать
        </Button>
      </Link>
    </section>
  );
};
