import React from "react";
import ProdCardInfo from "./ProdCardInfo";
import Image from "next/image";

//De esta forma tambien puedo llamar a las propiedades del componente
//colocando directamente los atributos del componente en los parámetros
//Así reemplazo el usar props y luego desestructurar el objeto.
const ProductCard = ({ item, styles }) => {
  return (
    <div className={styles["product-card"]}>
      {/* Cambio la clase de la imagen a un contenedor que contenga a Image por el tema del Layout
      Y la obligatoriedad den colocar un ancho y alto fijo que utiliza Image de next */}
      <figure className={styles["product-img"]}>
        <Image
          src={item.category.image}
          alt={item.title}
          layout="fill"
          // className={styles["product-img"]}
          // width={300}
          // height={240}
        />
      </figure>

      <ProdCardInfo infoItem={item} styles={styles} />
    </div>
  );
};

export default ProductCard;
