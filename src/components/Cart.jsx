import Header from "./Header";
import { useOutletContext } from "react-router";
import CartItems from "./CartItems";
const Cart = () => {
  const { cart, setCart, setCartCounter } = useOutletContext();
  const subtotal = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  const shipping = 4.99;
  const taxes = (subtotal * 0.1).toFixed(2);

  return (
    <section id="cart">
      <div>
        <div className="flex justify-left items-center my-5 mx-6 md:mx-30 gap-x-2 text-slate-600">
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
        <div className="flex flex-col justify-center items-left my-5 mx-6 md:mx-30 border border-rose-300/30 rounded-xl p-4 ">
          <h3 className="text-xl font-semibold text-slate-600 mb-4">
            Order summary
          </h3>
          <div className="flex justify-between text-sm md:text-lg font-bold">
            <p>Subtotal:</p>
            <p>${subtotal}</p>
          </div>
          <div className="flex justify-between text-sm md:text-lg font-bold">
            <p>Shipping:</p>
            <p>${shipping}</p>
          </div>
          <div className="flex justify-between border-b border-rose-300/30 pb-4 text-sm md:text-lg font-bold">
            <p>Taxes:</p>
            <p>${taxes}</p>
          </div>
          <div className="flex justify-between font-heading text-slate-600 pt-4 text-xl md:text-2xl font-semibold">
            <p>Total:</p>
            <p>${taxes}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cart;
