import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPass from "../containers/RecoveryPass";
import CreateAccount from "../containers/CreateAccount";
import EditAccount from "../containers/EditAccount";
import ProductPreview from "../components/ProductPreview";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import OrderDetails from "../pages/OrderDetails";
import ResumenOrders from "../pages/ResumenOrders";
import ShopCar from "../pages/ShopCar";
import Appcontext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState"; //Importo el estado inicial desdel el custom hook para utilziarlo como valor inicial

function App() {
  //Traigo la función del hook que contiene el estado y la función de addToCart para usarlo en los componentes internos
  // Y esta constante la paso como el valor del context.provider
  const initialState = useInitialState();

  return (
    // El contexto debe englobar a toda la aplicación usando el método Provider
    //El value que recibe viene a ser el estado de la aplicación como contexto
    // Se requiere un custom hook el cual tedrá el estado.
    <Appcontext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/create-account" element={<CreateAccount />} />
            <Route exact path="/edit-account" element={<EditAccount />} />
            <Route exact path="/recovery" element={<RecoveryPass />} />
            <Route exact path="/productView" element={<ProductPreview />} />
            <Route exact path="/my-order-details" element={<OrderDetails />} />
            <Route exact path="/resumen-orders" element={<ResumenOrders />} />
            <Route exact path="/shopping-car" element={<ShopCar />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Appcontext.Provider>
  );
}

export default App;
