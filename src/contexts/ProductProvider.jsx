import { createContext, useState, useEffect } from "react";

//Crear context
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  //State
  const [products, setProducts] = useState([]);

  //Fetch
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json()
      setProducts(data)
    };
    fetchProducts()
  }, []);

  return(
  <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
  )};

export default ProductProvider;
