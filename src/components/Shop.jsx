import { useOutletContext } from "react-router";
import { useState } from "react";
import ShopCard from "./ShopCard";
import Searchbar from "./Searchbar";

const Shop = () => {
  const {
    products,
    error,
    loading,
    cart,
    setCart,
    cartCounter,
    setCartCounter,
  } = useOutletContext();
  const handleClick = (product, qty) => {
    const exists = cart.some((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, { ...product, quantity: qty }]);
      setCartCounter(cart.length + 1);
    } else {
      const existingProduct = cart.find((item) => item.id === product.id);
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + qty,
      };
      const newCart = cart.filter((item) => item.id !== product.id);
      setCart([...newCart, { ...updatedProduct }]);
    }
  };
  return (
    <section id="shop">
      <Searchbar />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-5 mx-6 md:mx-30 gap-4">
        {products.map((product) => (
          <li key={product.id}>
            <ShopCard
              shopName={product.title}
              shopPrice={product.price}
              shopImage={product.image}
              cartCounter={cartCounter}
              handleClick={handleClick}
              product={product}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Shop;
