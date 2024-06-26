import { configureStore } from '@reduxjs/toolkit';
import currenciesSlice from './features/currencies/currenciesSlice';
import currenciesChartsSlice from './features/currencies/currenciesChartsSlice';
import applicationStateSlice from './features/applicationState/applicationStateSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      currencies: currenciesSlice,
      applicationState: applicationStateSlice,
      currenciesCharts: currenciesChartsSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
