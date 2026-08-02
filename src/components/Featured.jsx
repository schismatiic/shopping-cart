import { FaPaw } from "react-icons/fa";
import FeaturedCard from "./FeaturedCard";
const Featured = () => {
  const featuredProducts = [
    {
      id: 1,
      productName: "Pastel Ribbon Dress",
      productPrice: 59.99,
      productImg:
        "https://kawaiibabe.com/cdn/shop/products/fairy-kei-high-top-shoes-4-hi-tops-trainers-kawaii-babe-674_grande.jpg?v=1636391751",
    },
    {
      id: 2,
      productName: "Moonlight Lace Blouse",
      productPrice: 44.99,
      productImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodPCykFT-oZHWRLdZRDjSB2PvPs6v4ber43Zg4RI0mTSn_j2Ml8UGRGvq&s=10",
    },
    {
      id: 3,
      productName: "Fairy Bloom Skirt",
      productPrice: 39.99,
      productImg:
        "https://holleyteatime.shop/cdn/shop/collections/IMG_0059.png?v=1768709820&width=750",
    },
    {
      id: 4,
      productName: "Sugar Cloud Cardigan",
      productPrice: 49.99,
      productImg:
        "https://kawaiigoods.com/cdn/shop/products/il_1140xN.1686984990_cazz_2048x.jpg?v=1608830579",
    },
  ];
  return (
    <section id="featured">
      <div className="flex justify-center items-center gap-x-2 text-slate-600 ">
        <FaPaw className="w-6 h-6" />
        <h3 className="text-2xl font-semibold">Featured</h3>
        <FaPaw className="w-6 h-6" />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-5 mx-6 md:mx-30 gap-4">
        {featuredProducts.map((product) => (
          <li key={product.id}>
            <FeaturedCard
              featuredName={product.productName}
              featuredImage={product.productImg}
              featuredPrice={product.productPrice}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Featured;
