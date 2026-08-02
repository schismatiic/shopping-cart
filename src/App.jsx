import Navbar from "./components/Navbar";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
};

export default App;
