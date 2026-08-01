import { Link } from "react-router";
const Home = () => {
  return (
    <nav>
      <h1>minina</h1>

      <ul>
        <Link>Home</Link>
        <Link>Shop</Link>
        <Link>Cart</Link>
        <Link>About</Link>
      </ul>
    </nav>
  );
};
export default Home;
