// En este componente separo la lógica de llamado a la API usando
// custom hook donde prácticamente es una función a la cual envío el
// dato de la API como parametro y mediante el hook de useEffect
// retorno el valor del estado que deseo utilizar separando la lógica

import { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [dataItems, setDataItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, [API]);

  const fetchData = async () => {
    const response = await axios(API);
    setDataItems(response.data);
  };

  return dataItems;
};

export default useGetProducts;
