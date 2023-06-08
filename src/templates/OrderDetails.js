import React from "react";
import "../Styles/orders.css";
import ItemOrderDet from "../components/ItemOrderDet";

const OrderDetails = () => {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="tittle">My order</h1>
        <div className="my-order-content">
          <div className="order">
            <p>
              <span>21.09.22</span>
              <span>17 Articles</span>
            </p>
            <p>$111</p>
          </div>
        </div>
        <ItemOrderDet />
        <ItemOrderDet />
        <ItemOrderDet />
      </div>
    </div>
  );
};

export default OrderDetails;
