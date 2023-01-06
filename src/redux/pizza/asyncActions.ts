import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchPizzasParams, Pizza } from './types';

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
