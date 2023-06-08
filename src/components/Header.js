import React, { useState, useContext } from "react";
import MenuUser from "./MenuUser";
import Image from "next/image";
import iconMenu from "../Icons/icon_menu.svg";
import LogoMain from "../Logos/logo_yard_sale.svg";
import iconShopCard from "../Icons/icon_shopping_cart.svg";
import Appcontext from "../context/AppContext";
import ShopCar from "../templates/ShopCar";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false);
  const { state } = useContext(Appcontext); //COnecto el contexto

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav>
      <Image src={iconMenu} alt="menu" className="menu-movil" />
      <div className="navbar-left">
        <Image src={LogoMain} alt="logo" className="logo logoMenu" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li onClick={handleToggle}>xxx@xxxx.com</li>
          <li
            onClick={() => {
              setToggleOrder(!toggleOrder);
            }}
            className="navbar-shop-cart"
          >
            <Image src={iconShopCard} alt="" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
        {toggleMenu && <MenuUser />}
        {toggleOrder && <ShopCar />}
      </div>
    </nav>
  );
};

export default Header;
