import Navbar from "../components/Navbar";
import EducationBanner from "../components/heroSection";
import ThirdSection from "../components/thirdSection";
import SecondSection from "../components/secondSection";
import FourthSection from "../components/FourthSection";
import Footer from "../components/footer";
import FAQSection from "@/components/FifthSection";
export default function Page() {
  return (
    <div>
      <Navbar />
      <EducationBanner />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
