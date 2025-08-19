import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import OngoingProjects from "@/app/projects/Projects";
import PartnerSection from "@/components/PartnerSection";
import Stats from "@/components/Stats";

export default function Projects() {
    return (
        <div>
            {/* top hero */}
            <TopHero
                 title="Projects & Initiatives"
                 subtitle="Explore our initiatives in livestock development across Imo State."
                 bgImage="/images/vision.png"
            />
          <Stats/>
           
            <OngoingProjects />
            <PartnerSection/>
      {/* Footer */}
      <Footer />

        </div>
    )
}