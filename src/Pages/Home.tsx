import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import FeaturedDestination from "../Components/FeaturedDestination";
import Testimonials from "../Components/Testimonials";
import NewsLetterSignup from "../Components/NewsLetterSignup";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FeaturedDestination />
      <Testimonials />
      <NewsLetterSignup />
    </div>
  );
}
