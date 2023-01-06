import { RootState } from '../store';

export const selectSort = (state: RootState) => state.filter.sort;
export const selectFilterState = (state: RootState) => state.filter;
export const selectPizzaData = (state: RootState) => state.pizza;
