export type SortPropertyType = 'rating' | 'price' | '-price';

export type Sort = {
  name: string;
  sortProperty: SortPropertyType;
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: Sort;
}
