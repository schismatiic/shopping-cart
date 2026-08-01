import { Link } from "react-router";

const Hero = () => {
  return (
    <section
      className="flex justify-center text-center md:text-start flex-col text-slate-600 items-center md:items-start"
      id="hero"
    >
      <h2 className="md:ml-18  font-heading font-black text-3xl">
        Frilly pastel fashion for everyone
      </h2>
      <p className="md:ml-18">
        Our designs are purrfect and range from XXS to 5X!
      </p>
      <Link
        className="md:ml-18 text-center cursor-pointer bg-pink-400 hover:bg-pink-500 text-teal-50 w-25 p-2 rounded-3xl font-bold"
        to="/shop"
      >
        Shop now
      </Link>
    </section>
  );
};
export default Hero;
