export interface Pizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
  quantity: number;
}
export interface PizzaNoArray {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
  quantity: number;
}

export interface UserPizzaStore {
  totalQuantity: number;
  totalPrise: number;
  userPizza: PizzaNoArray[];
}
