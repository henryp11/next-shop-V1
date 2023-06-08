import React from "react";
import ProductCard from "../components/ProductCard";
import useGetProducts from "../hooks/useGetProducts";
import styles from "../styles/mainList.module.css";

const API = "https://api.escuelajs.co/api/v1/products";

// Documentación API: https://api.escuelajs.co/docs/#/products/ProductsController_getAll

const MainListProducts = () => {
  const products = useGetProducts(API);

  return (
    <section className={styles["main-container"]}>
      <div className={styles["cards-container"]}>
        {products.map((product) => {
          return (
            <ProductCard key={product.id} item={product} styles={styles} />
          );
        })}
      </div>
    </section>
  );
};

export default MainListProducts;
