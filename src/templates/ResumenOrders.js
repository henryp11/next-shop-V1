import React from "react";
import "../Styles/resumenOrders.css";
import OrderSimple from "../components/OrderSimple";

const ResumenOrders = () => {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="tittle">My orders</h1>
        <OrderSimple />
        <OrderSimple />
        <OrderSimple />
        <OrderSimple />
      </div>
    </div>
  );
};

export default ResumenOrders;
