import { FaPaw } from "react-icons/fa";
import ArrivalCard from "./ArrivalCard";

const Arrivals = () => {
  const arrivals = [
    {
      id: 1,
      arrivalImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bIhZsyHv3QvXwuSW0P5zuCmbui3k7Yw6fxLXoVnOoMSDK6DYyKMaH1I&s=10",
      arrivalName: "Fairy Garden Dress",
    },
    {
      id: 2,
      arrivalImg:
        "https://i.pinimg.com/736x/71/25/e9/7125e93b129db14e0ea76188d2326d56.jpg",
      arrivalName: "Pastel Dream Collection",
    },
    {
      id: 3,
      arrivalImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtF1_gE_1_WG3NAMWVFbD4pM68YHHQIpn4q5wlrTwamPssCPIw1xx30Oew&s=10",
      arrivalName: "Lavender Moon Set",
    },
    {
      id: 4,
      arrivalImg:
        "https://i.pinimg.com/236x/c6/b2/ae/c6b2ae572549dc692a6d593b2d581b31.jpg",
      arrivalName: "Crystal Bloom Collection",
    },
  ];
  return (
    <section className="my-5" id="arrivals">
      <div className="flex justify-center items-center gap-x-2 text-slate-600 ">
        <FaPaw className="w-6 h-6" />
        <h3 className="text-2xl font-semibold">New arrivals</h3>
        <FaPaw className="w-6 h-6" />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-5 mx-6 md:mx-30 gap-4">
        {arrivals.map((arrival) => (
          <li key={arrival.id}>
            <ArrivalCard
              arrivalName={arrival.arrivalName}
              arrivalImage={arrival.arrivalImg}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Arrivals;
