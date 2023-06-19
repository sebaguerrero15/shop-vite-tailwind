import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0)
  const [total, setTotal] = useState(0)

  //Total a Pagar
  useEffect(() => {
    const total = cart.reduce((acc, curr) => {
      return acc + curr.price * curr.amount
    }, 0)
    setTotal(total)
  }, [cart])

  //Actualizar cantidad de items en header
  useEffect(() => {
    if(cart) {
      const amount = cart.reduce((acc, cur) => {
        return acc + cur.amount
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])

  //Añadir al carro
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    //Checkear si el producto esta en el carrito
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    //SI el producto esta en el carro
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if(item.id === id) {
          return {...item, amount: cartItem.amount + 1}
        } else {
          return item;
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  };

  //Eliminar del carro
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
  }

  //Limpiar Carrito
  const clearCart = () => {
    setCart([])
  }

  //Aumentar Producto
  const increaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id)
    addToCart(cartItem, id)
  }

  //Disminuir Producto
  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => {
      return item.id === id
    })
    if(cartItem) {
      const newCart = cart.map(item => {
        if(item.id === id) {
          return { ...item, amount: cartItem.amount - 1}
        } else {
          return item
        }
      })
      setCart(newCart)
    } 

      if(cartItem.amount < 2) {
        removeFromCart(id)
      }
    
    
  }

  return (
    <CartContext.Provider 
    value={{ 
      cart, 
      addToCart, 
      clearCart,
      removeFromCart, 
      increaseAmount, 
      decreaseAmount,
      itemAmount,
      total 
      }}
      >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
