export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};

export interface CartsliceState {
  totalPrice: number;
  items: CartItem[];
}
