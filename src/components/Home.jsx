import { Link } from "react-router";
import Hero from "./Hero";
import Arrivals from "./Arrivals";
import Featured from "./Featured";
const Home = () => {
  return (
    <main>
      <Hero />
      <Arrivals />
      <Featured />
    </main>
  );
};
export default Home;
