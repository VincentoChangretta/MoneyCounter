import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";



export const Counter = () => {

  const dispatch = useDispatch()

  const counterValue = useSelector(getCounterValue)

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }


  return (
    <div>
      <h2 data-testId="value-title">Value: {counterValue}</h2>
      <Button data-testId="increment-btn" theme={ButtonTheme.FULL_RADIUS} onClick={increment}>
            increment
      </Button>
      <Button data-testId="decrement-btn" theme={ButtonTheme.FULL_RADIUS} onClick={decrement}>
            decrement
      </Button>
    </div>
  );
}
