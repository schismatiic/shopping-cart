import { Link } from "react-router";
import { FaPaw } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-pink-400 mt-8 px-4 py-8 text-teal-50">
      <Link to="/">
        <h1 className="flex items-center gap-x-1 font-black text-2xl active:scale-95">
          <FaPaw className="w-6 h-6 text-teal-50" />
          minina
        </h1>
      </Link>
      <p className="text-center text-xs">
        Soft silhouettes, dreamy details, and timeless elegance. Designed to
        make every day feel magical.
      </p>
      <p className="text-center text-xs">2026 minina. All rights reserved.©</p>
    </footer>
  );
};
export default Footer;
