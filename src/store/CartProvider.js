import { useReducer } from "react";
import CartContext from "./CartContext";

const itemsLocal = JSON.parse(localStorage.getItem("items"));
const totalAmountLocal = JSON.parse(localStorage.getItem("totalAmount"));

const defaultState = {
  items: itemsLocal ? itemsLocal : [],
  totalAmount: totalAmountLocal ? totalAmountLocal : 0,
};

const cartReducer = (state, action) => {
  console.log(action);
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingItem) {
      const updatedItem = { ...existingItem, amount: existingItem.amount + 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat({ ...action.item, amount: 1 });
    }

    const updatedTotalAmount =
      state.totalAmount + parseFloat(action.item.price);
    console.log(updatedTotalAmount);

    localStorage.setItem("items", JSON.stringify(updatedItems));
    localStorage.setItem(
      "totalAmount",
      JSON.stringify(
        parseFloat(updatedTotalAmount) >= 0 ? parseFloat(updatedTotalAmount) : 0
      )
    );
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    if (state.items.length === 0) return defaultState;
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[itemIndex];
    if (!existingItem) return state;
    const updatedTotalAmount =
      state.totalAmount - existingItem?.price <= 0
        ? 0
        : state.totalAmount - existingItem?.price;
    let updatedItems;
    if (existingItem?.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    }

    localStorage.setItem("items", JSON.stringify(updatedItems));
    localStorage.setItem(
      "totalAmount",
      JSON.stringify(
        parseFloat(updatedTotalAmount) >= 0 ? parseFloat(updatedTotalAmount) : 0
      )
    );
    const result = { items: updatedItems, totalAmount: updatedTotalAmount };
    return result;
  }

  return defaultState;
};
const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultState);

  const addItemToCart = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemToCart,
    removeitems: removeFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
