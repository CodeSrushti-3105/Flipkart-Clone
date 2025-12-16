import Navbar from "../components/Navbar/Navbar";
import Categories from "../components/Categories/Categories";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import DealSection from "../components/DealSection/DealSection";
import OfferSection from "../components/OfferSection/OfferSection";
import FashionSection from "../components/FashionSection/FashionSection";
import MultiDealSection from "../components/MultiDealSection/MultiDealSection";
import HorizontalSlider from "../components/HorizontalSlider/HorizontalSlider";

function Home() {
  return (
    <div>
      <Navbar />
      <Categories />
      <BannerSlider />
      <DealSection />
      <OfferSection />
      <FashionSection />
      <MultiDealSection />
      <HorizontalSlider />
    </div>
  );
}

export default Home;
