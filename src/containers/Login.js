import React, { useRef } from "react";
import LogoMain from "../Logos/logo_yard_sale.svg";

const Login = () => {
  //Formulario de Login con useRef
  // En resumen useRef reemplaza al uso de getElementById de JS
  // por lo que puedo aplicar los métodos que se utiliza en esos casos
  //como realziar innerHTML, innerText, etc
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Objeto de JavaScript para capturar información de formulario
    const formData = new FormData(form.current); //al ingesar con .current ya accedo a los elementos de la referencia
    //Una vez capturada la información la almaceno detallada en un objeto
    //Usando la función get accedo al identificador del input
    //el cual debe tener el atributo "name" en vez de "id"
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <>
      <div className="login">
        <div className="form-container">
          <img src={LogoMain} alt="logo" className="logo" />
          <h1 className="title">Create a new password</h1>
          <p className="subtitle">Enter a new password for you account</p>
          <form action="" className="form" ref={form}>
            <label htmlFor="" className="labelForm">
              Email address
            </label>
            <input
              type="text"
              name="email"
              placeholder="@.com"
              className="input input-email"
            />
            <label htmlFor="" className="labelForm">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="*********"
              className="input input-password"
            />

            <input
              type="submit"
              value="Log in"
              className="primary-button login-button"
              onClick={handleSubmit}
            />
            <a href="/">Forgot my password</a>
          </form>
          <button className="secondary-button">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Login;
