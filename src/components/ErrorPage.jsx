import { Link } from "react-router";
import Navbar from "./Navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-5 text-lg p-4">
        <p>
          Oh no, this route doesn't exist! You can go back to the home page by{" "}
          <Link to="/" className="text-blue-400 cursor-pointer">
            clicking here
          </Link>{" "}
          , though!
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
