import { Trash2 } from "lucide-react";
const CartItems = ({
  product,
  cartName,
  cartPrice,
  cartImage,
  cartQuantity,
  cart,
  setCart,
  setCartCounter,
}) => {
  const handleAdd = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    const updatedProduct = {
      ...existingProduct,
      quantity: existingProduct.quantity + 1,
    };
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart([...newCart, { ...updatedProduct }]);
  };
  const handleRemove = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct.quantity > 1) {
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity - 1,
      };
      const newCart = cart.filter((item) => item.id !== product.id);
      setCart([...newCart, { ...updatedProduct }]);
    }
  };
  const handleDelete = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    setCartCounter(cart.length - 1);
  };
  return (
    <div className="flex text-xs md:text-lg justify-between text-slate-600">
      <div className="flex items-center">
        <img
          className="w-20 h-20 md:w-30 md:h-30 object-fit border border-rose-300/30 rounded-xl p-2"
          src={cartImage}
          alt={cartName}
        />
        <div className="flex flex-col ml-2 gap-x-2">
          <h3 className="font-semibold">{cartName}</h3>
          <p>${cartPrice}</p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-x-2 md:gap-x-10">
        <div className="flex items-center">
          <button
            className="flex justify-center items-center rounded-l-lg w-4 h-4 p-3 md:p-4 cursor-pointer text-xl md:text-2xl font-medium border border-rose-300/30 hover:bg-teal-100 active:scale-95"
            onClick={() => handleRemove(product)}
          >
            -
          </button>
          <p className="flex justify-center items-center w-4 h-4 p-3 md:p-4 cursor-pointer border-t border-rose-300/30 border-b border-rose-300/30">
            {cartQuantity}
          </p>
          <button
            className="flex justify-center items-center rounded-r-lg w-4 h-4 p-3 md:p-4 cursor-pointer text-xl md:text-2xl font-medium border border-rose-300/30 hover:bg-teal-100 active:scale-95"
            onClick={() => handleAdd(product)}
          >
            +
          </button>
        </div>
        <div>
          <h3 className="font-semibold">Total:</h3>
          <p>${(cartPrice * cartQuantity).toFixed(2)}</p>
        </div>
        <button
          className="cursor-pointer"
          onClick={() => handleDelete(product)}
        >
          <Trash2 className="w-5 h-5 md:w-6 md:h-6 hover:text-slate-500 active:scale-95" />
        </button>
      </div>
    </div>
  );
};
export default CartItems;
