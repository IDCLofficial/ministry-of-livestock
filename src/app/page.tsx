import HeroSection from "@/components/HeroSection";
import CommissionerSection from "@/components/CommissionerSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import FeaturedPartners from "@/components/FeaturedPartners";
import Footer from "@/components/Footer";
import Link from "next/link";
import AboutSection from "@/components/AboutSection";
import { FaProjectDiagram, FaCalendarAlt, FaPhotoVideo, FaInfoCircle } from "react-icons/fa"
import DepartmentsSection from "@/components/Departments";
import PartnerSection from "@/components/PartnerSection";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  const cardsData = [
    {
      title: "About Us",
      description: "Learn more about the Imo State Ministry of Livestock Development.",
      icon: FaInfoCircle,
      link: "/about"
    },
    {
      title: "Projects",
      description: "Explore our initiatives in livestock development across Imo State.",
      icon: FaProjectDiagram,
      link: "/projects"
    },
    {
      title: "Events",
      description: "Stay updated with livestock-related programs, fairs, and training events.",
      icon:     FaCalendarAlt,
      link: "/events"
    },
    {
      title: "Media",
      description: "Browse photos, videos, and news showcasing our progress.",
      icon:   FaPhotoVideo,
      link: "/media"
    },
   
  ];

  // departments

  const livestockDepartments = [
    {
      title: "Department of Animal Health & Veterinary Services",
      desc: "Ensures animal disease prevention, control, and treatment through veterinary clinics, vaccination campaigns, and modern health monitoring systems.",
    },
    {
      title: "Department of Livestock Production",
      desc: "Promotes sustainable cattle, poultry, goat, and pig farming, while supporting improved breeds and enhanced productivity across the state.",
    },
    {
      title: "Department of Pasture & Feed Development",
      desc: "Focuses on pasture management, feed formulation, and promoting modern techniques for sustainable forage production.",
    },
    {
      title: "Department of Planning, Research & Statistics",
      desc: "Collects and analyzes livestock data to guide evidence-based policies, research innovations, and sustainable livestock growth strategies.",
    },
  ];

  
  return (
    <>

     
      {/* hero section */}
      <div className="relative">
  <HeroSection
    title="Advancing Livestock Development Through Innovation & Sustainability"
    description="Empowering Imo’s farmers and agribusinesses with sustainable practices, modern techniques, and innovative solutions."
    buttonText="Learn More"
    backgroundImages={[
      "/images/hero1.png",
      "/images/hero2.png",
      "/images/hero3.png",
    ]}
  />

  {/* InfoCards - Full Width */}
  <div className="w-full bg-[#06163A] lg:bg-transparent py-8 relative lg:absolute lg:left-0 lg:bottom-0 lg:translate-y-1/2 z-20">

      <section className="w-full px-6">
        {/* Wrapper */}
        <div className="flex flex-col lg:flex-row gap-6">
          {cardsData.map((item, i) => (
          <div
          key={i}
          className="relative bg-white rounded-xl p-6 shadow-md 
                     transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                     scale-100 lg:scale-75 flex-1
                     hover:lg:flex-[2] hover:lg:scale-100
                     hover:-translate-y-3 hover:shadow-2xl hover:rotate-[0.5deg]"
        >
          {/* Irregular purple border effect */}
          <div
            className="absolute inset-0 rounded-xl border-4 border-[#06163A] 
                       [clip-path:polygon(6%_0,94%_0,100%_10%,100%_94%,94%_100%,6%_100%,0_90%,0_6%)] 
                       pointer-events-none transition-all duration-700 ease-in-out
                       group-hover:border-purple-600"
          ></div>
        
          <AnimatedSection>
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full 
                            border border-[#06163A] mb-3 bg-gray-100 
                            transition-all duration-500 ease-in-out 
                            group-hover:scale-110 group-hover:bg-purple-50">
              <item.icon className="text-black text-base group-hover:text-purple-600 transition-colors duration-500" />
            </div>
          </AnimatedSection>
        
          <AnimatedSection>
            {/* Title */}
            <h3 className="text-lg md:text-xl w-[93%] font-bold mb-2 text-gray-900 
                           transition-colors duration-500 group-hover:text-purple-700">
              {item.title}
            </h3>
        
            {/* Description */}
            <p className="text-gray-600 mb-4 w-[93%] text-sm md:text-base 
                          transition-colors duration-500 group-hover:text-gray-800">
              {item.description}
            </p>
          </AnimatedSection>
        
          {/* Link */}
          <Link
            href={item.link}
            className="text-purple-600 font-semibold relative 
                       after:content-[''] after:absolute after:left-0 after:bottom-0 
                       after:w-0 after:h-[2px] after:bg-purple-600 
                       after:transition-all after:duration-500 
                       hover:after:w-full"
          >
            More info
          </Link>
        </div>
        
          ))}
        </div>
      </section>
    </div>
  




</div>

       <AboutSection
  title="Imo State Ministry of Livestock Development"
  description={`The Ministry is leading the transformation of livestock farming in Imo State — from subsistence to a thriving agro-industrial sector.  
Infrastructure investments, including a modern abattoir in Naze and an advanced processing hub in Okigwe, are setting new standards in meat hygiene, storage, and value addition.  
Stakeholder engagements, modern veterinary services, and support for breeding and cooperatives are empowering rural communities and advancing food security.  
Imo stands among the first states to create a dedicated Livestock Ministry, signaling strong political will and strategic positioning for sustainable growth and economic diversification.`}
  image="/images/heromain.png"
  link="/about"
  buttonText="Learn More"
/>
{/* departments */}
<DepartmentsSection
      title="Our Departments & Their Functions"
      subtitle="Discover how each department within the Imo State Ministry of Livestock Development contributes to sustainable farming, food security, and economic empowerment."
      departments={livestockDepartments}
      image="/images/depart1.png" 
      buttonText="See All Departments"
      buttonLink="/departments"
    />

  
      {/* Commissioner Section */}
      <CommissionerSection
        imageSrc="/images/commisioner.png"
        imageAlt="Honourable Commissioner"
        title="About The Commissioner"
        bio="Hon. Dr. Anthony C. Mgbeahuruike was sworn in as the pioneer Commissioner for Livestock Development by Governor Hope Uzodimma in March 2025. A distinguished veterinarian and research scientist, he holds a Doctor of Veterinary Medicine (DVM) from the University of Nigeria, Nsukka, and a Ph.D. in Fungal Genomics from the University of Helsinki, Finland. His appointment brings deep technical expertise to the forefront of Imo's agricultural transformation agenda."
        details="Since assuming office, Commissioner Mgbeahuruike has been instrumental in laying the ministry's foundational strategy. In May 2025, he initiated a comprehensive assessment of the state's veterinary clinics and farm estates, including the reactivation of the Acharaubo Farm Estate, to restore critical infrastructure. He has held strategic engagements with the Poultry Association of Nigeria (PAN) and the All Farmers Association of Nigeria (AFAN) to co-design farmer-centric support programs. Under his leadership, the ministry began collaborating with the National Animal Production Research Institute (NAPRI) in July 2025 to domesticate the National Livestock Transformation Plan (NLTP), focusing on establishing modern ranching models suited for Imo State.

Dr. Mgbeahuruike is recognized for his data-driven approach and his commitment to building partnerships that drive tangible results, positioning him to lead the charge in creating a robust, profitable, and sustainable livestock sector for Imo State."
        
      />
      <div className="bg-white">

    
      {/* Latest News Section */}
      <LatestNewsSection />
      </div>

     
      {/* Featured Partners Section */}
      <FeaturedPartners />
    {/* partner with us */}
<PartnerSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
