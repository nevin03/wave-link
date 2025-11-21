import LandingPage from "@/modules/LandingPage/LandingPage";
import ExpertServices from '@/modules/ExpertServices/index';
import Footer from "@/modules/Footer";
import ProductImage from "@/modules/ProductImage";
import ServicesVideo from "@/modules/ExpertServices/ServicesVideo";
import CounterLandingPage from "@/modules/Counters";
import Clients from "@/modules/Clients";

export default function Home() {
  return (
    <>
      <LandingPage />
      <ExpertServices />
      <ProductImage/>
      <Clients/>
      <CounterLandingPage/>
      <Footer/>
    </>
  );
}
