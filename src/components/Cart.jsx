import Header from "./Header";
import { useOutletContext } from "react-router";
import CartItems from "./CartItems";
const Cart = () => {
  const { cart, setCart, setCartCounter } = useOutletContext();
  return (
    <section id="cart">
      <div>
        <div className="flex justify-left items-center my-5 mx-6 md:mx-30 gap-x-2 text-slate-600 ">
          <h3 className="text-2xl font-semibold">Your cart</h3>
        </div>
        <div>
          {cart.length !== 0 ? (
            <ul className="flex flex-col my-5 mx-6 md:mx-30 gap-4 border border-rose-300/30 rounded-xl p-4 ">
              {cart.map((product) => (
                <li
                  className="border-b border-rose-300/30 py-4 last:border-b-0"
                  key={product.id}
                >
                  <CartItems
                    product={product}
                    cartName={product.title}
                    cartPrice={product.price}
                    cartImage={product.image}
                    cartQuantity={product.quantity}
                    cart={cart}
                    setCart={setCart}
                    setCartCounter={setCartCounter}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col my-5 mx-6 md:mx-30 gap-4 border border-rose-300/30 rounded-xl p-4 ">
              <h3>The cart is empty</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Cart;
