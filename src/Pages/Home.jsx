import Hero from "../Components/Hero";
import CategoryHeading from "../Components/CategoryHeading";
import CategoriesSection from "../Components/CategoriesSection";
import Carousel from "../Components/Carousel";

const Home = () => {
  return (
    <>
      <Hero />
      {/* Categories Section - Men & Women */}
      <CategoryHeading h2Heading="CATEGORIES MENS & WOMEN" />
      <CategoriesSection
        categoryMen="MEN"
        categoryMenImg="https://via.placeholder.com/300x200"
        categoryMenEastern="MEN Eastern"
        categoryMenEasternImg="https://via.placeholder.com/300x200"
        categoryWomenFusion="WOMEN FUSION"
        categoryWomenFusionImg="https://via.placeholder.com/300x200"
        categoryWomenEastern="WOMEN EASTERN"
        categoryWomenEasternImg="https://via.placeholder.com/300x200"
      />

      {/* Categories Section - Boys & Girls */}
      <CategoryHeading h2Heading="CATEGORIES BOYS & GIRLS" />
      <CategoriesSection
        categoryMen="MINI BOYS & GIRLS 0-6Y"
        categoryMenImg=""
        categoryMenEastern="BOYS 7-14Y"
        categoryMenEasternImg=""
        categoryWomenFusion="GIRL-EASTERN"
        categoryWomenFusionImg=""
        categoryWomenEastern="GIRLS 7-14Y"
        categoryWomenEasternImg=""
      />

      {/* Carousel Section */}
      <Carousel />
    </>
  );
};

export default Home;
