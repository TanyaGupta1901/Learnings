import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Modal from "./components/UI/Modal";
import CartProvider from "./store/CartProvider";

function App() {
  const [showModal, setShowModalState] = useState(false);
  const setShowModal = () => {
    setShowModalState(true);
  };
  const closeModal = () => {
    setShowModalState(false);
  };
  return (
    <CartProvider>
      <Modal showModal={showModal} closeModal={closeModal}>
        <Cart></Cart>
      </Modal>
      <Header setShowModal={setShowModal} />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
