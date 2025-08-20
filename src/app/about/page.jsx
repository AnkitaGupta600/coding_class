import AboutHero from "../../components/about/about-hero";
import WhyChooseUs from "../../components/about/why-choose-us";
import LocationContact from "../../components/about/location-contact";
import Footer from "../../components/footer";
import Breadcrumb from "../../components/breadcrumb"; // Import the new Breadcrumb component
import Navbar from "../../components/Navbar";
export default function AboutPage() {
  // Define the breadcrumb items for the About page
  const breadcrumbItems = [{ label: "About", href: "/about", current: true }];

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Breadcrumb Section */}
      <div className="bg-white py-4 border-b border-gray-200 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <AboutHero />
      <WhyChooseUs />
      <LocationContact />

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of successful developers who started their careers at
            CodingSkillHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors">
              Schedule Campus Visit
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 font-semibold px-8 py-4 rounded-lg transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
