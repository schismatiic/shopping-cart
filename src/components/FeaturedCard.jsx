import { Link } from "react-router";

const FeaturedCard = ({ featuredName, featuredImage, featuredPrice }) => {
  return (
    <Link
      to="/shop"
      className="flex h-full flex-col gap-2 border border-rose-300/30 rounded-xl overflow-hidden shadow-md transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
    >
      <img
        className="w-full h-56 sm:h-64 lg:h-72 object-fit p-4"
        src={featuredImage}
        alt={featuredName}
      />
      <div className="flex flex-1 flex-col gap-y-2 mx-4 my-3 text-slate-600 hover:text-slate-400 active:scale-95">
        <h3 className="text-lg">{featuredName}</h3>
        <div className="mt-auto flex items-center cursor-pointer ">
          <p className="text-sm">${featuredPrice}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
