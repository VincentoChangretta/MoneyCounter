import { Input } from 'shared/ui/Input/Input';
import cls from './BudgetTrackerCreator.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { InputWithSelect } from 'shared/ui/InputWithSelect/InputWithSelect';
import { SelectListItem, SelectSize } from 'shared/ui/Select/Select';

interface BudgetTrackerCratorProps {
  className?: string;
}

const list: SelectListItem[] = [
  {
    name: 'name',
    item: 'item',
    placeholder: 'placeholder',
  },
  {
    name: 'name1',
    item: 'item1',
    placeholder: 'placeholder1',
  },
  {
    name: 'name2',
    item: 'item2',
    placeholder: 'placeholder2',
  },
];

export const BudgetTrackerCrator = (props: BudgetTrackerCratorProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.BudgetTrackerCrator, {}, [className])}>
      <h3 className="title">Поступления</h3>
      <div className={cls.inputBox}>
        <Input name="Дата" placeholder="Дата" />
        <Input name="Время" placeholder="Время" />
        <InputWithSelect
          name="Доход"
          placeholder="Доход"
          size={SelectSize.MIDDLE}
          selectList={list}
          selectActiveItem={'123'}
        />
        <Input name="Комментарий к доходу" placeholder="Комментарий" />
      </div>
      <Button theme={ButtonTheme.FULL_RADIUS_INV}>Создать</Button>
    </div>
  );
};
