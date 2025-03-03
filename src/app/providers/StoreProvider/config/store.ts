import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'enteties/Counter/model/slice/counterSlice';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: initialState,
  });
}
