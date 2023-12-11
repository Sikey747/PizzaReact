export interface Pizzas {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export interface UserPizzaStore {
  quantity: number;
  sortType: string;
  userPizza: Pizzas[];
}
