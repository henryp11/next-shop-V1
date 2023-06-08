import React from "react";
import Header from "../components/Header";
import MainListProducts from "../containers/MainListProducts";
const Home = () => {
  return (
    <>
      {/* Como ya envío a Header en la secciçon prinicipal de la
    aplicación en el archivo _app.js, ya puedo quitar el header de esta sección */}
      {/* <Header /> */}
      <MainListProducts />
    </>
  );
};

export default Home;
