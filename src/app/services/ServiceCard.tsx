import AnimatedSection from "@/components/AnimatedSection";
import React from "react";

const services = [
  {
    title: "Veterinary Services & Pest Control",
    description:
      "Manages animal disease diagnosis, surveillance, and control. Coordinates statewide vaccination programs, pest control campaigns, and operates veterinary clinics and diagnostic laboratories to safeguard animal health.",
  },
  {
    title: "Livestock Production & Breed Improvement",
    description:
      "Oversees the development and management of cattle, poultry, goats, sheep, and pigs. Runs government breeding farms and promotes modern genetic improvement techniques such as artificial insemination to boost livestock productivity.",
  },
  {
    title: "Fishery & Aquaculture Services",
    description:
      "Promotes fish farming through farmer training and extension services. Manages public water bodies for sustainable fishing, supports modern aquaculture practices, and helps increase food security and rural income.",
  },
  {
    title: "Agribusiness Development & Marketing",
    description:
      "Connects farmers and cooperatives with profitable markets. Facilitates value addition through meat and fish processing, and attracts investment into the livestock value chain for economic growth.",
  },
  {
    title: "Planning, Research & Statistics",
    description:
      "Collects and analyzes livestock data for evidence-based policy formulation. Conducts research on best practices, while monitoring and evaluating ministry projects and programs for efficiency.",
  },
  {
    title: "Administration & Human Resources",
    description:
      "Handles staff welfare, recruitment, training, and postings. Manages all internal administrative functions to ensure smooth operation of the ministry and effective service delivery.",
  },
  {
    title: "Finance & Accounts",
    description:
      "Oversees the ministry’s budgeting, expenditures, and revenue generation. Ensures financial reporting transparency and compliance with public service rules in all financial transactions.",
  },
];


const ServiceCard = ({ title, description }: { title: string; description: string;}) => (
 <AnimatedSection>
 <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
    <h3 className="text-lg font-bold text-green-700 mb-2">{title}</h3>
    <p className="text-gray-700 text-sm flex-1 mb-3">{description}</p>
  </div>
  </AnimatedSection>
);

export default function ServicesGrid() {
  return (
    <section className="w-full py-12 bg-[#f7f9fa] flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
}