import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItems: (item) => {},
  removeitems: (id) => {},
});

export default CartContext;
