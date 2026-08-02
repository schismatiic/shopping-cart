import { FaPaw } from "react-icons/fa";

const Featured = () => {
  return (
    <section id="featured">
      <div className="flex justify-center items-center gap-x-2 text-slate-600 ">
        <FaPaw className="w-6 h-6" />
        <h3 className="text-2xl font-semibold">Featured</h3>
        <FaPaw className="w-6 h-6" />
      </div>
    </section>
  );
};
export default Featured;
