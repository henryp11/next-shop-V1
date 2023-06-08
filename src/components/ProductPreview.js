import React from "react";
import "../Styles/products.css";
import iconClose from "../Icons/icon_close.png";
import iconAddCar from "../Icons/bt_add_to_cart.svg";

const ProductPreview = () => {
  return (
    <aside className="product-detail">
      <div className="product-detail-close">
        <img src={iconClose} alt="close" />
      </div>
      <img
        src="https://images.pexels.com/photos/687811/pexels-photo-687811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="product"
      />
      <div className="product-info-preview">
        <p>$50</p>
        <p>Controller ps4</p>
        <p>Control original Sony for ps4</p>
        <button className="primary-button add-button">
          <img src={iconAddCar} alt="" />
          Add to cart
        </button>
      </div>
    </aside>
  );
};

export default ProductPreview;
