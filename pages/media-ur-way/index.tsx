import Faq from "@/modules/media-your-way/Faq";
import Header from "@/modules/media-your-way/Header";
import Hero from "@/modules/media-your-way/Hero";
import ServicesCategories from "@/modules/media-your-way/ServicesCategories";
import Temoignages from "@/modules/media-your-way/temoignage";
const MediaUrWay = () => {
  return (
    <div className="h-screen min-w-full overflow-auto bg-white">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <ServicesCategories />
      </div>
      <div id="temoignages">
        <Temoignages />
      </div>

      <div id="faq">
        <Faq />
      </div>
    </div>
  );
};

export default MediaUrWay;
