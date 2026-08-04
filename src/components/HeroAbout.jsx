import { Link } from "react-router";
import { FaPaw } from "react-icons/fa";

const HeroAbout = () => {
  return (
    <section
      className="flex justify-center text-center md:text-end flex-col text-slate-500 items-center md:items-end mb-5"
      id="hero-about"
    >
      <div className="flex flex-col text-slate-300 md:text-slate-500 bg-black/20 md:bg-transparent p-4 items-center md:items-end">
        <h2 className="md:mr-18  font-heading font-black text-3xl md:text-5xl">
          About minina
        </h2>
        <p className="md:mr-18 max-w-150 text-lg md:text-xl font-bold">
          Inspired by fairy kei, pastel dreams, and the charm of cats, minina
          celebrates fashion that's playful, expressive, and made for everyone.
        </p>
      </div>
    </section>
  );
};
export default HeroAbout;
