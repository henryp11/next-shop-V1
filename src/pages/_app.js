//Este es el archivo que ejecuta la aplicación como tal por lo tanto aquí colocare
//todas las configuraciones globales como estilos css y principalmente el contexto
//También colocaré los componentes a repetir como si fuese el layout den React
import Head from "next/head";
import Appcontext from "context/AppContext";
import Header from "components/Header";
import useInitialState from "hooks/useInitialState";
import "../../src/styles/global.css";

export default function App({ Component, pageProps }) {
  //Inicializo el estado
  const initialState = useInitialState();
  //Dentro del return aplico el Provider de AppContext
  return (
    <Appcontext.Provider value={initialState}>
      <Head>
        {/* Titulo por default en páginas si importa la equiqueta Head */}
        <title>NEXT shop!!</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </Appcontext.Provider>
  );
}
