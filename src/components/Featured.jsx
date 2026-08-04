import { FaPaw } from "react-icons/fa";
import FeaturedCard from "./FeaturedCard";
import Header from "./Header";

const Featured = ({ products, loading, error }) => {
  //   const featuredProducts = [
  //     {
  //       id: 1,
  //       productName: "Pastel Ribbon Dress",
  //       productPrice: 59.99,
  //       productImg:
  //         "https://kawaiibabe.com/cdn/shop/products/fairy-kei-high-top-shoes-4-hi-tops-trainers-kawaii-babe-674_grande.jpg?v=1636391751",
  //     },
  //     {
  //       id: 2,
  //       productName: "Moonlight Lace Blouse",
  //       productPrice: 44.99,
  //       productImg:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodPCykFT-oZHWRLdZRDjSB2PvPs6v4ber43Zg4RI0mTSn_j2Ml8UGRGvq&s=10",
  //     },
  //     {
  //       id: 3,
  //       productName: "Cotton Candy Ruffle Skort",
  //       productPrice: 39.99,
  //       productImg:
  //         "https://shopmyviolet.com/cdn/shop/files/DSC_6621-Edit.jpg?v=1772145127&width=3000",
  //     },
  //     {
  //       id: 4,
  //       productName: "Sugar Cloud Cardigan",
  //       productPrice: 49.99,
  //       productImg:
  //         "https://kawaiigoods.com/cdn/shop/products/il_1140xN.1686984990_cazz_2048x.jpg?v=1608830579",
  //     },
  //   ];
  return (
    <section id="featured">
      <Header headerText={"Featured"} />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-5 mx-6 md:mx-30 gap-4">
        {products.slice(4, 8).map((product, index) => (
          <li key={product.id}>
            <FeaturedCard
              featuredName={product.title}
              featuredImage={product.image}
              featuredPrice={product.price}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Featured;
