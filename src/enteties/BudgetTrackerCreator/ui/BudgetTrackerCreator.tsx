import { Input } from 'shared/ui/Input/Input';
import cls from './BudgetTrackerCreator.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface BudgetTrackerCratorProps{
  className?: string
}

export const BudgetTrackerCrator = ({className}: BudgetTrackerCratorProps) => {
  return (
    <div className={classNames(cls.BudgetTrackerCrator, {}, [className],)}>
      <h3 className='title'>Поступления</h3>
      <div className={cls.inputBox}>
        <Input placeholder='Дата'/>
        <Input placeholder='Время'/>
        <Input placeholder='Ваш доход'/>
        <Input placeholder='Комментарий'/>
      </div>
      <Button theme={ButtonTheme.FULL_RADIUS_INV}>
        Создать
      </Button>
    </div>
  );
}
