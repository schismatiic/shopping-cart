import { Link, useOutletContext } from "react-router";
import Hero from "./Hero";
import Arrivals from "./Arrivals";
import Featured from "./Featured";
const Home = () => {
  const { products, error, loading } = useOutletContext();
  return (
    <main>
      <Hero />
      <Arrivals />
      <Featured products={products} loading={loading} error={error} />
    </main>
  );
};
export default Home;
