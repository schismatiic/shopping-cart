import { Link } from "react-router";
import { FaPaw } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="flex justify-center text-center md:text-start flex-col text-slate-600 items-center md:items-start"
      id="hero"
    >
      <div className="flex flex-col items-center md:items-start">
        <h2 className="md:ml-18  font-heading font-black text-3xl md:text-5xl">
          Frilly pastel fashion for everyone
        </h2>
        <p className="md:ml-18 text-lg md:text-xl font-bold">
          Our designs are purrfect and range from XXS to 5X!
        </p>
      </div>
      <Link
        className="flex mt-3 gap-x-2 justify-center items-center md:ml-18 text-center border border-rose-300/30 cursor-pointer bg-pink-400 hover:bg-pink-500 active:scale-95 text-teal-50 w-34 p-2 rounded-lg font-bold"
        to="/shop"
      >
        Shop now
        <FaPaw className="w-6 h-6" />
      </Link>
    </section>
  );
};
export default Hero;
