import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import ItemCar from "../components/ItemCar";
import iconFlecha from "../Icons/flechita.svg";
import Appcontext from "../context/AppContext";
//import "../styles/shopCard.css";
// Next trabaja con modulos css por lo que los archivos de estilos deben
// tener la extensión nombre.module.css
import styles from "../styles/shopCard.module.css";

const ShopCar = () => {
  const { state } = useContext(Appcontext); //Conecto el contexto
  const sumaTotal = () => {
    const reducer = (acumulator, currentValue) =>
      acumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles["my-order-container"]}>
      <div className={styles["my-order"]}>
        <div className={styles["tittle-container"]}>
          <Image src={iconFlecha} alt="" />
          <h1 className={styles.tittle}>My Car</h1>
        </div>
        {state.cart.map((item) => {
          return (
            <ItemCar item={item} key={`orderItem-${item.id}`} styles={styles} />
          );
        })}
        <div className={styles["my-order-content"]}>
          <div className={styles.order}>
            <p>
              <span>Total:</span>
            </p>
            <p>${sumaTotal()}</p>
          </div>
        </div>
        <Link
          href="/checkout"
          className={`${styles["primary-button"]} ${styles["add-button"]}`}
        >
          CheckOut
        </Link>
      </div>
    </aside>
  );
};

export default ShopCar;
