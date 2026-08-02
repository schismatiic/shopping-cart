import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const ArrivalCard = ({ arrivalName, arrivalImage }) => {
  return (
    <div className="flex h-full flex-col gap-2 border border-rose-300/30 rounded-xl overflow-hidden shadow-md">
      <img
        className="w-full h-56 sm:h-64 lg:h-72 object-cover"
        src={arrivalImage}
        alt={arrivalName}
      />
      <div className="flex flex-1 flex-col gap-y-2 mx-4 my-3 text-slate-600">
        <h3 className="text-lg cursor-pointer">{arrivalName}</h3>
        <Link
          className="mt-auto flex items-center cursor-pointer hover:text-slate-400 active:scale-95"
          to="/shop"
        >
          <p className="text-sm">View collection</p>
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default ArrivalCard;
