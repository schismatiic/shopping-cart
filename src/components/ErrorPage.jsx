import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h1>Oh no, this route doesn't exist!</h1>
      <p>
        You can go back to the home page by{" "}
        <Link to="/" className="text-blue-400 cursor-pointer">
          clicking here
        </Link>{" "}
        , though!
      </p>
    </div>
  );
};

export default ErrorPage;
