import React from "react";
// import "../Styles/menus.css";

const MenuUser = () => {
  return (
    <div class="desktop-menu">
      <ul>
        <li>
          <a href="/" class="menu-link">
            My orders
          </a>
        </li>
        <li>
          <a href="/" class="menu-link">
            My account
          </a>
        </li>
        <li>
          <a href="/" class="menu-link">
            Sign Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuUser;
