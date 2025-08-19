"use client"

import { useState } from "react";
import Image from "next/image";

const departments = [
  {
    name: "Department of Animal Health and Veterinary Services",
    image: "/images/vet.png",
    description: "Provides veterinary services, disease surveillance, vaccination campaigns, and livestock health management to ensure animal welfare and food safety."
  },
  {
    name: "Department of Animal Production",
    image: "/images/heromain.png",
    description: "Focuses on improving livestock breeding, nutrition, and productivity through research, extension services, and modern farming practices."
  },
  {
    name: "Department of Fisheries and Aquaculture",
    image: "/images/fish.png",
    description: "Promotes sustainable fishing, aquaculture development, and capacity building for fish farmers to boost food security and income generation."
  },
  {
    name: "Department of Administration and Finance",
    image: "/images/depart2.png",
    description: "Handles administrative coordination, human resource management, procurement, and financial operations of the ministry."
  },
  {
    name: "Department of Planning, Research, and Statistics",
    image: "/images/depart1.png",
    description: "Conducts research, data collection, and policy analysis to support evidence-based decision-making and livestock sector planning."
  },
  {
    name: "Department of Extension and Training",
    image: "/images/training.png",
    description: "Provides extension services, farmer training, and sensitization on best practices in livestock farming, animal husbandry, and resource management."
  }
];


export default function UnitsTabsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = departments[activeIdx];

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-16 px-4">
      {/* Tabs */}
      <div className="w-full md:w-1/4 border-r pr-4">
        <ul className="space-y-2">
          {departments.map((dept, idx) => (
            <li key={dept.name}>
              <button
                className={`w-full text-left px-4 py-2 rounded font-semibold border transition cursor-pointer
                  ${activeIdx === idx
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-black border-transparent hover:bg-green-50 hover:text-green-700'}
                `}
                onClick={() => setActiveIdx(idx)}
              >
                {dept.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Content */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{active.name}</h2>
        <div className="w-full max-w-xl mb-4">
          <Image src={active.image} alt={active.name} width={600} height={300} className="rounded-xl object-cover" />
        </div>
        <p className="text-gray-700 text-sm md:text-base">{active.description}</p>
      </div>
    </section>
  );
} 