import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: { name: 'rating', sortProperty: 'rating' },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
      state.currentPage = 1;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const selectSort = (state) => state.filter.sort;
export const selectFilterState = (state) => state.filter;
export const selectPizzaData = (state) => state.pizza;
export const { setCategoryId, setSort, setCurrentPage, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
