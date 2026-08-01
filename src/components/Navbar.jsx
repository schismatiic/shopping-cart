import { Link } from "react-router";
import { User } from "lucide-react";
import { Heart } from "lucide-react";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex justify-between text-xl m-4  items-center">
      <h1 className="font-black text-slate-600 text-2xl">minina</h1>
      <ul className="flex font-medium items-center gap-x-8 [&_a:hover]:text-slate-600 [&_a:hover]:border-b-2 [&_a:hover]:border-slate-600">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link>Cart</Link>
        <Link>About</Link>
      </ul>
      <div className="flex gap-x-4 *:cursor-pointer *:w-6 *:h-6">
        <Link>
          <Heart className="hover:text-slate-600" />
        </Link>
        <Link>
          <User className="hover:text-slate-600" />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
