import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

interface FetchPizzasParams {
  order: string;
  sortBy: string;
  category: string;
  search: string;
  currentPage: number;
}

export enum Status {
  LOADING = 'loading',
  ERROR = 'error',
  SUCCESS = 'success',
}

interface pizzaSliceState {
  items: Pizza[];
  status: Status;
}

const initialState: pizzaSliceState = {
  items: [],
  status: Status.LOADING, //loading | success | error
};

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzasParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://63ab08e4fdc006ba6053b2ca.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );

    return data;
  },
);

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
  /* extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  }, */
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
