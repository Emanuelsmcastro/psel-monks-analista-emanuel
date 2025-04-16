import AppSection from "@components/AppSection";
import CardsSection from "@components/CardsSection";
import CategoriesSection from "@components/CategoriesSection";
import ContactSection from "@components/ContactSection/indext";
import HeroLPSection from "@components/HeroLPSection";
import Products from "@components/Products";
import SimpleGallery from "@components/SimpleGallery";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <HeroLPSection />
      <Products />
      <SimpleGallery />
      <AppSection />
      <CategoriesSection />
      <CardsSection />
      <ContactSection />
    </>
  );
}

export default App;
