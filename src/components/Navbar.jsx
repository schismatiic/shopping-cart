import { Link } from "react-router";
import { User, Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { FaPaw } from "react-icons/fa";

const Navbar = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  return (
    <nav className="">
      <div className="flex justify-between text-lg m-4  items-center">
        <header className="flex gap-x-4">
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setToggleOpen(!toggleOpen)}
          >
            {toggleOpen ? (
              <X className="w-6 h-6 hover:text-slate-600 active:scale-95" />
            ) : (
              <Menu className="w-6 h-6 hover:text-slate-600 active:scale-95" />
            )}
          </button>
          <Link to="/">
            <h1 className="flex items-center gap-x-1 font-black text-slate-600 text-2xl active:scale-95">
              <FaPaw className="w-6 h-6 text-slate-600" />
              minina
            </h1>
          </Link>
        </header>
        <ul className="hidden md:flex font-medium items-center gap-x-8 [&_a:hover]:text-slate-600 [&_a:hover]:border-b-2 [&_a:hover]:border-slate-600">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
        </ul>

        <div className="flex gap-x-4 *:cursor-pointer *:w-6 *:h-6">
          <Link to="/favorites" aria-label="Favorites">
            <Heart className="hover:text-slate-600" />
          </Link>
          <Link to="/profile" aria-label="Profile">
            <User className="hover:text-slate-600" />
          </Link>
        </div>
      </div>
      {toggleOpen && (
        <ul className="md:hidden flex flex-col font-medium text-lg">
          <Link
            className="ml-4 py-2 hover:text-slate-600 active:scale-95"
            to="/"
          >
            Home
          </Link>
          <Link
            className="ml-4 py-2 hover:text-slate-600 active:scale-95"
            to="/shop"
          >
            Shop
          </Link>
          <Link
            className="ml-4 py-2 hover:text-slate-600 active:scale-95"
            to="/cart"
          >
            Cart
          </Link>
          <Link
            className="ml-4 py-2 hover:text-slate-600 active:scale-95"
            to="/about"
          >
            About
          </Link>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
