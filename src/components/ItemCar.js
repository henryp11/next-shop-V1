import React, { useContext } from "react";
import Image from "next/image";
import iconClose from "../Icons/icon_close.png";
import Appcontext from "../context/AppContext";

const ItemCar = ({ item, styles }) => {
  const { removeFromCart } = useContext(Appcontext);

  const handleRemove = (item) => {
    removeFromCart(item);
  };
  return (
    <div className={styles["shopping-cart"]}>
      <figure>
        <Image
          src={item.category.image}
          alt={item.title}
          width={50}
          height={50}
        />
      </figure>
      <p>{item.title}</p>
      <p>{item.price}</p>
      <Image
        onClick={() => {
          handleRemove(item);
        }}
        src={iconClose}
        alt="removeItem"
        className={styles["icon-close"]}
        width={50}
        height={50}
      />
    </div>
  );
};

export default ItemCar;
