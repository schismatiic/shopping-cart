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
  const [cartAdded, setCartAdded] = useState([]);
  const handleClick = (product, quantity) => {
    setCartAdded([...cartAdded, product.id]);
    if (!cartAdded.includes(product.id)) {
      setCart([...cart, { ...product, quantity: quantity }]);
      setCartCounter(cart.length + 1);
    }
    console.log(cart);
    console.log(quantity);
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
