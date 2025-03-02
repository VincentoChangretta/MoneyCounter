import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './AccountingCreatorSeciton.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Portal } from 'shared/ui/Portal/Portal';
import { BudgetTrackerCrator } from 'enteties/BudgetTrackerCreator';

interface AccountingCreatorSecitonProps{
  className?: string
}

export const AccountingCreatorSeciton = ({className}: AccountingCreatorSecitonProps) => {
  const [modal, setModal] = useState<boolean>(false)

  return (
    <section className={classNames(cls.AccountingCreatorSeciton, {}, [className])}>
      <div className="container">
        <Button theme={ButtonTheme.FULL_RADIUS} onClick={() => setModal(true)}>Создать</Button>
        <Portal>
          <Modal isActive={modal} onClose={setModal}>
            <BudgetTrackerCrator/>
          </Modal>
        </Portal>
        <div className={classNames(cls.inner)}>
          <section className={classNames(cls.accountingBox)}>
            {/* <nav className={classNames(cls.nav)}>
              <ul className={classNames(cls.navList)}>
                <li>Месяц: Январь</li>
                <li>Доходы</li>
                <li>Зарплата</li>
              </ul>
            </nav> */}
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
