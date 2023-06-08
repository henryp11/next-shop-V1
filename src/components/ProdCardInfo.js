import React, { useState, useContext } from "react"; //traigo el contexto para usarlo al añadir item en carrito
import iconAddCart from "../Icons/bt_add_to_cart.svg";
import iconAddedCart from "../Icons/bt_added_to_cart.svg";
import Appcontext from "../context/AppContext";
import Image from "next/image";

const ProdCardInfo = ({ infoItem, styles }) => {
  //Creo una constante para almacenar el contexto, en este caso la función de añadir al carrito
  const { addToCart } = useContext(Appcontext);
  const [added, setAdded] = useState(false);

  //creo función para usar el item a añadir en la función del contexto
  const handleClick = (item) => {
    addToCart(item);
    setAdded(true);
  };

  return (
    <div className={styles["product-info"]}>
      <div>
        <p>{infoItem.price}$</p>
        <p>{infoItem.title}</p>
      </div>
      <figure
        onClick={() => {
          handleClick(infoItem);
        }}
      >
        {added ? (
          <Image src={iconAddedCart} alt="" />
        ) : (
          <Image src={iconAddCart} alt="" />
        )}
      </figure>
    </div>
  );
};

export default ProdCardInfo;
