import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import ServiceCard from "./ServiceCard";
import PartnerSection from "../../components/PartnerSection";

export default function Services() {
    return (
        <div className="h-screen bg-white">
            
            {/* Top Hero */}
            <TopHero
                 title="What we do"
                 subtitle="Discover our comprehensive range of services designed to support livestock farmers, enhance animal health, and promote sustainable agricultural practices across Imo State."
                 bgImage="/images/gradient1.png"
            />
            <ServiceCard />
            
          <PartnerSection/>
            {/* Footer */}
            <Footer />
        </div>
    )
}