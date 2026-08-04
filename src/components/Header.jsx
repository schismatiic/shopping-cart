import { FaPaw } from "react-icons/fa";

const Header = ({ headerText }) => {
  return (
    <div className="flex justify-center items-center gap-x-2 text-slate-600 ">
      <FaPaw className="w-6 h-6" />
      <h3 className="text-2xl font-semibold">{headerText}</h3>
      <FaPaw className="w-6 h-6" />
    </div>
  );
};
export default Header;
