import { Link } from "react-router";
import { User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { FaPaw } from "react-icons/fa";

const Navbar = ({ cartCounter }) => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [headerText, setHeaderText] = useState("minina");
  return (
    <header className="sticky top-0 z-50 bg-teal-50">
      <nav className="py-0.5">
        <div className="flex justify-between text-lg m-4  items-center">
          <div className="flex gap-x-4">
            <button
              className="md:hidden cursor-pointer"
              onClick={() => setToggleOpen(!toggleOpen)}
              aria-label="Open/close menu"
            >
              {toggleOpen ? (
                <X className="w-6 h-6 hover:text-slate-600 active:scale-95" />
              ) : (
                <Menu className="w-6 h-6 hover:text-slate-600 active:scale-95" />
              )}
            </button>
            <Link
              className="flex items-center gap-x-2"
              onClick={() => {
                setHeaderText("meow");
                setTimeout(() => setHeaderText("minina"), "300");
              }}
              to="/"
            >
              <FaPaw className="w-6 h-6 text-slate-600" />
              <h1 className="flex w-10 items-center font-black text-slate-600 text-2xl active:scale-95">
                {headerText}
              </h1>
            </Link>
          </div>
          <ul className="hidden md:flex font-medium items-center gap-x-8 [&_a:hover]:text-slate-600 [&_a:hover]:border-b-2 [&_a:hover]:border-slate-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <div className="flex gap-x-4 *:cursor-pointer *:w-6 *:h-6">
            <Link to="/favorites" aria-label="Favorites">
              <Heart className="hover:text-slate-600" />
            </Link>
            <Link
              className="relative inline-block"
              to="/cart"
              aria-label="Cart"
            >
              <ShoppingBag className="hover:text-slate-600" />
              {cartCounter > 0 && (
                <p className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white">
                  {cartCounter}
                </p>
              )}
            </Link>
            <Link to="/profile" aria-label="Profile">
              <User className="hover:text-slate-600" />
            </Link>
          </div>
        </div>
        {toggleOpen && (
          <ul className="md:hidden flex flex-col font-medium text-lg">
            <li>
              <Link
                className="ml-4 py-2 hover:text-slate-600 active:scale-95"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="ml-4 py-2 hover:text-slate-600 active:scale-95"
                to="/shop"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="ml-4 py-2 hover:text-slate-600 active:scale-95"
                to="/cart"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                className="ml-4 py-2 hover:text-slate-600 active:scale-95"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
export default Navbar;
