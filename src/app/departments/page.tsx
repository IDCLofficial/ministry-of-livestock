import UnitsTabsSection from "./UnitsTabsSection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import PartnerSection from "@/components/PartnerSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Departments",
  description: "Departments and units of the Ministry of Livestock Development, Imo State Government.",
  path: "/departments",
});


export default function UnitsPage() {
  return (
    <div className="bg-white">
     {/* Top Hero */}
     <TopHero
                 title="Departments"
                 subtitle=""
                 bgImage="/images/depart1.png"
            />
      <UnitsTabsSection />
    
      <PartnerSection/>
      <Footer />
    </div>
  );
}
