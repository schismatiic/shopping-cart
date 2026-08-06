const CartItems = ({ cartName, cartPrice, cartImage, cartQuantity }) => {
  return (
    <div className="flex text-xs md:text-lg justify-between text-slate-600">
      <div className="flex items-center">
        <img
          className="w-20 h-20 md:w-30 md:h-30 object-cover border border-rose-300/30 rounded-xl p-4"
          src={cartImage}
          alt={cartName}
        />
        <div className="flex flex-col ml-2 gap-x-2">
          <h3 className="font-semibold">{cartName}</h3>
          <p>${cartPrice}</p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-x-2">
        <div className="flex items-center">
          <button className="flex justify-center items-center rounded-l-lg w-4 h-4 p-3 md:p-4 cursor-pointer text-xl md:text-2xl font-medium border border-rose-300/30 hover:bg-teal-100 active:scale-95">
            -
          </button>
          <p className="flex justify-center items-center w-4 h-4 p-3 md:p-4 cursor-pointer border-t border-rose-300/30 border-b border-rose-300/30">
            {cartQuantity}
          </p>
          <button className="flex justify-center items-center rounded-r-lg w-4 h-4 p-3 md:p-4 cursor-pointer text-xl md:text-2xl font-medium border border-rose-300/30 hover:bg-teal-100 active:scale-95">
            +
          </button>
        </div>
        <div>
          <h3 className="font-semibold">Total:</h3>
          <p>${cartPrice * cartQuantity}</p>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
