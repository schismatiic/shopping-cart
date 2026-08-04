import { useOutletContext } from "react-router";
import ShopCard from "./ShopCard";
import { useState } from "react";

const Shop = () => {
  const { products, error, loading } = useOutletContext();
  const [quantity, setQuantity] = useState(0);

  return (
    <section id="shop">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-5 mx-6 md:mx-30 gap-4">
        {products.map((product) => (
          <li key={product.id}>
            <ShopCard
              shopName={product.title}
              shopPrice={product.price}
              shopImage={product.image}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Shop;
