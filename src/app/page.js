import FashionBanner from "@/components/home/Banner";
import NewArrivals from "@/components/home/NewArrivals";
import Footer from "@/components/layout/Footer";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <FashionBanner />
      <NewArrivals />
      <Footer />
    </div>
  );
}
