import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import { useState } from "react";
import useProducts from "./hooks/useProducts";
import { FaPaw } from "react-icons/fa";

const App = () => {
  const { products, loading, error } = useProducts();
  const [cart, setCart] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);

  if (loading)
    return (
      <div className="flex flex-col gap-y-4 justify-center items-center min-h-screen">
        <p className="text-pink-500 text-sm tracking-wide">
          Loading cute products...
        </p>
        <FaPaw className="text-pink-400 text-5xl animate-paw-spin" />
      </div>
    );
  if (error) return <p>A network error was encountered</p>;
  return (
    <>
      <Navbar cartCounter={cartCounter} />
      <Outlet
        context={{
          products,
          loading,
          error,
          cart,
          setCart,
          cartCounter,
          setCartCounter,
        }}
      />
      <Footer />
    </>
  );
};

export default App;
