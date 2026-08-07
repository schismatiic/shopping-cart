import HeroAbout from "./HeroAbout";
import Header from "./Header";
import catImage from "../assets/cat-1.jpg";
import { Flower, Sparkles, Stars, Heart, Candy } from "lucide-react";

const About = () => {
  return (
    <section id="about">
      <HeroAbout />
      <div className="flex justify-center mx-6 md:mx-30">
        <Header headerText={"Our story"} />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto px-6 py-8">
        <div className="rounded-[2rem] bg-pink-300 p-4 shadow-xl shadow-pink-300/30 rotate-2">
          <img
            className="rounded-2xl object-cover max-w-xs hover:rotate-1 transition duration-300"
            src={catImage}
            alt="minina"
          />
        </div>
        <div className="relative">
          <Sparkles className="absolute -top-3 -left-3 z-10 h-7 w-7 text-yellow-300 rotate-12" />
          <Sparkles className="absolute top-6 -right-3 z-10 h-6 w-6 text-pink-300" />
          <Stars className="absolute -bottom-3 left-12 z-10 h-6 w-6 text-yellow-200 -rotate-12" />
          <Sparkles className="absolute bottom-8 -right-4 z-10 h-8 w-8 text-pink-400 rotate-6" />
          <p className="max-w-2xl rounded-3xl border-2 border-pink-200 bg-white/80 backdrop-blur-sm p-8 text-lg leading-8 shadow-xl shadow-pink-200/40">
            minina was born in 2026 as a love letter to fairy kei, fashion
            design, and cute things. It all started with the owner of the brand:
            the fluffy white Persian with the same name, who loves tutus and
            frilly pastel clothes. Born from a daisy and blessed with the magic
            of the stars, minina is not only a fluffy Persian cat, but a magical
            girl who has the ability to make the prettiest pastel dreamy clothes
            you could ever think of! Everything is designed and
            <span className="bg-pink-200 px-1 rounded-md font-bold">paw</span>
            made by her with lots of love.
          </p>
        </div>
      </div>
      <p className="mt-8 flex items-center justify-center gap-3 text-center text-pink-400 italic">
        <Flower className="h-5 w-5 text-pink-300" />
        <span className="font-medium tracking-wide">
          Handmade with love since 2026
        </span>
        <Flower className="h-5 w-5 text-pink-300" />
      </p>
    </section>
  );
};
export default About;
