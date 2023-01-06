export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export interface FetchPizzasParams {
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

export interface pizzaSliceState {
  items: Pizza[];
  status: Status;
}
