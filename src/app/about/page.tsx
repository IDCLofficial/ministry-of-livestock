import { SectionHero } from "@/components/SectionHero";
import { ObjectivesSection } from "@/app/about/ObjectivesSection";
import StructureSection from "@/app/about/StructuresSection";
import Footer from "../../components/Footer";
import { TopHero } from "../../components/TopHero";
import MissionVisionCard from "@/app/about/MissionVisionCard";
import TeamPage from "./Team";
import Stats from "@/components/Stats";
import PartnerSection from "@/components/PartnerSection";


export default function AboutUs() {
    
    const departments = [
        {
          id: 1,
          title: "Department of Veterinary Services & Pest Control",
          description:
            "Manages animal disease diagnosis, surveillance, and control. Implements statewide vaccination and pest control campaigns, while operating veterinary clinics and diagnostic laboratories to safeguard animal health.",
        },
        {
          id: 2,
          title: "Department of Livestock Production & Breed Improvement",
          description:
            "Oversees the development of cattle, poultry, goats, sheep, and pigs. Manages government breeding farms and promotes modern genetic improvement techniques, including artificial insemination, to boost productivity.",
        },
        {
          id: 3,
          title: "Department of Fishery & Aquaculture Services",
          description:
            "Promotes fish farming through extension services and farmer training. Manages public water bodies for sustainable fishing, while supporting modern aquaculture practices to increase food security and income.",
        },
        {
          id: 4,
          title: "Department of Agribusiness Development & Marketing",
          description:
            "Links farmers and cooperatives to profitable markets and facilitates value addition through meat and fish processing. Promotes investment opportunities across the livestock value chain to strengthen agribusiness growth.",
        },
        {
          id: 5,
          title: "Department of Planning, Research & Statistics",
          description:
            "Collects and analyzes livestock data to support evidence-based policy formulation. Conducts research on best practices and monitors as well as evaluates ministry projects and programs for continuous improvement.",
        },
        {
          id: 6,
          title: "Department of Administration & Human Resources",
          description:
            "Manages staff welfare, recruitment, postings, and training. Oversees all internal administrative functions of the ministry to ensure smooth operations and effective service delivery.",
        },
        {
          id: 7,
          title: "Department of Finance & Accounts",
          description:
            "Oversees the ministry's budgeting, expenditures, revenue generation, and financial reporting. Ensures strict compliance with public service rules and maintains transparency in financial management.",
        },
      ];
      
    return (
        <div className="h-screen bg-white">

            {/* Top Hero */}
            <TopHero
                 title="About Us"
                 subtitle="The Ministry of Livestock Development, Imo State, is committed to advancing food security, empowering farmers, improving animal health, and promoting sustainable livestock practices."
                 bgImage="/images/depart1.png"
            />
            
            {/* Section Hero */}
            <SectionHero
                aboutText="The Ministry of Livestock Development in Imo State serves as a key driver of agricultural transformation, focusing on sustainable livestock production, animal health, and value chain development. Established to enhance food security and economic growth, the ministry is responsible for implementing policies and programs that support livestock farmers, improve animal husbandry practices, and promote agribusiness opportunities. Through strategic partnerships and innovative approaches, we are committed to transforming Imo State into a leading hub for livestock production in Nigeria."
                imgSrc="/images/about1.png"
                altText="Imo State Ministry of Livestock Development - Advancing agricultural development"
            />
          <Stats/>

           <MissionVisionCard
            missionTitle="Our Mission"
            missionText="To promote sustainable livestock production, ensure food security, and enhance the economic well-being of farmers through innovative agricultural practices, capacity building, and value chain development in Imo State."
            missionImage="/images/mission.png"
            visionTitle="Our Vision"
            visionText="To transform Imo State into a leading hub for sustainable livestock production, ensuring food security, economic growth, and improved livelihoods for all stakeholders in the agricultural sector."
            visionImage="/images/vision.png"
            />
            <TeamPage />
            {/* Objectives Section */}
            <ObjectivesSection />
            {/* Structures Section */}
            <StructureSection
      title="Our Structure"
      subtitle="Our specialized departments work together to enhance livestock production, ensure animal health, and support farmers through innovative agricultural practices and policy implementation across Imo State."
      imgSrc="/images/building.png"
      imgAlt="Imo State Ministry Building"
      departments={departments}
    />
          <PartnerSection/>
            {/* Footer */}
            <Footer />
        </div>
    )
}