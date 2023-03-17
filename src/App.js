import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Modal from "./components/UI/Modal";

function App() {
  const [showModal, setShowModalState] = useState(false);
  const setShowModal = () => {
    setShowModalState(true);
  };
  const closeModal = () => {
    setShowModalState(false);
  };
  return (
    <>
      <Modal showModal={showModal} closeModal={closeModal}>
        cart
      </Modal>
      <Header setShowModal={setShowModal} />
      <AvailableMeals />
    </>
  );
}

export default App;
