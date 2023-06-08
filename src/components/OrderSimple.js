import React from "react";
import iconFlecha from "../Icons/flechita.svg";

const OrderSimple = () => {
  return (
    <div className="my-order-content">
      <div className="order">
        <p>
          <span>21.09.22</span>
          <span>17 Articles</span>
        </p>
        <p>$111</p>
        <img src={iconFlecha} alt="" />
      </div>
    </div>
  );
};

export default OrderSimple;
