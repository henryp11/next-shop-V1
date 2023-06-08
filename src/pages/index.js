// Este archivo index.js ubicado en pages es la raíz principal del
// sitio es decir la aplicaicón como tal ya que las rutas en next se manejan por archivos

import Head from "next/head";
import MainListProducts from "../containers/MainListProducts";

export default function Home() {
  return (
    <>
      <Head>
        <title>YarnSale with Next</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainListProducts />
    </>
  );
}
