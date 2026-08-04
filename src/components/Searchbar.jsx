import { Search } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="w-6/12 flex justify-between items-center my-5 mx-6 md:mx-30 border border-rose-300/30 rounded-3xl">
      <input
        className="w-11/12 text-sm md:text-lg px-4 py-2 "
        type="text"
        placeholder="Search products..."
      />
      <button className="px-4 py-2 flex items-center justify-center border-l border-rose-300/30 hover:text-slate-400 active:scale-95 cursor-pointer">
        <Search className="text-sm md:text-lg" />
      </button>
    </div>
  );
};
export default Searchbar;
