import { Link } from "react-router";
import { FaPaw } from "react-icons/fa";

const ShopCard = ({
  shopName,
  shopPrice,
  shopImage,
  quantity,
  setQuantity,
}) => {
  return (
    <Link
      to="/shop"
      className="flex h-full flex-col gap-2 border border-rose-300/30 rounded-xl overflow-hidden shadow-md transition-transform duration-300 ease-out hover:scale-105"
    >
      <img
        className="w-full h-56 sm:h-64 lg:h-72 object-cover"
        src={shopImage}
        alt={shopName}
      />
      <div className="flex flex-1 flex-col gap-y-2 mx-4 my-3 text-slate-600 ">
        <h3 className="text-lg hover:text-slate-400 active:scale-95">
          {shopName}
        </h3>
        <div className="mt-auto flex flex-col justify-center">
          <p className="text-sm font-extrabold">${shopPrice}</p>
          <div className="flex mt-3 items-center">
            <button
              className="flex justify-center items-center rounded-l-lg w-4 h-4 py-4 px-4 cursor-pointer text-2xl font-medium border border-rose-300/30 hover:bg-teal-100 active:scale-95"
              onClick={() => quantity > 0 && setQuantity(quantity - 1)}
            >
              -
            </button>
            <p className="flex justify-center items-center w-4 h-4 py-4 px-4 cursor-pointer border-t border-rose-300/30 border-b border-rose-300/30">
              {quantity}
            </p>
            <button
              className="flex justify-center items-center rounded-r-lg w-4 h-4 py-4 px-4 cursor-pointer text-2xl font-medium border border-rose-300/30 hover:bg-teal-100 active:scale-95"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <div className="flex justify-start">
            <Link
              className="flex mt-3 w-full gap-x-2 justify-center items-center text-center border border-rose-300/30 cursor-pointer bg-pink-400 hover:bg-pink-500 active:scale-95 text-teal-50 p-2 rounded-lg font-bold"
              to="/shop"
            >
              Add to cart
              <FaPaw className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ShopCard;
