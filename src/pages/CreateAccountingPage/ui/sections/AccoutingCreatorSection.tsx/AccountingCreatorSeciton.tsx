import cls from './AccountingCreatorSeciton.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface AccountingCreatorSecitonProps{
  className?: string
}

export const AccountingCreatorSeciton = ({className}: AccountingCreatorSecitonProps) => {
  return (
    <section className={classNames(cls.AccountingCreatorSeciton, {}, [className])}>
      <div className="container">
        <h2 className='title'>Управляй доходами и расходами гикбо</h2>
        <div className={classNames(cls.inner)}>
          <section className={classNames(cls.accountingBox)}>
            <nav className={classNames(cls.nav)}>
              <ul className={classNames(cls.navList)}>
                <li>Месяц: Январь</li>
                <li>Доходы</li>
                <li>Зарплата</li>
              </ul>
            </nav>
            <div className={classNames(cls.contentBox)}>
                Контентный div
            </div>
            {/* <ul>
                    <li><p>Доход или расход</p></li>
                    <li>Перечисление типов "Зарплата", "Инвестиции", "Продукты", "Транспорт" и т.д.</li>
                    <li>Месяц: <p>Январь</p></li>
                    <li>Разовые и периодические операции: Разделение на разовые и периодические (ежемесячные, ежеквартальные) операции.</li>
                    <li>Размер: <p>Слайдер</p></li>
                    <li></li>
                </ul> */}
            
          </section>
          <div>

          </div>
        </div>
      </div>
    </section>
  );
}
