import { useState } from "react";

// Empiezo creando un estado inicial en este caso un array vacio
const initialState = {
  cart: [],
};

// Con el hook de useState se cambiará el estado inicial
const useInitialState = () => {
  const [state, setState] = useState(initialState);
  //Payload se usa para el objeto que quiero pasar al estado en este caso un item
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  return { state, addToCart, removeFromCart }; //retorno el estado y la función a usar
};

export default useInitialState;
