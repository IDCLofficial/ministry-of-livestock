import AnimatedSection from "../../components/AnimatedSection";

export const ObjectivesSection = () => {
    const objectives = [
        {
            title: "Livestock Production & Development",
            description: "Enhance livestock productivity and sustainability through modern farming techniques, improved breeds, and innovative agricultural practices across Imo State."
        },
        {
            title: "Animal Health & Disease Control",
            description: "Implement comprehensive animal health programs, vaccination campaigns, and disease surveillance to ensure healthy livestock populations."
        },
        {
            title: "Farmer Support & Capacity Building",
            description: "Provide training, resources, and technical assistance to livestock farmers to improve productivity and adopt best practices in animal husbandry."
        },
        {
            title: "Value Chain Development",
            description: "Strengthen livestock value chains from production to processing and marketing, creating economic opportunities and improving market access for farmers."
        },
        {
            title: "Research & Innovation",
            description: "Promote research in livestock production, animal nutrition, and sustainable farming methods to drive innovation in the agricultural sector."
        },
        {
            title: "Policy & Regulation",
            description: "Develop and implement policies that support sustainable livestock development, food safety, and animal welfare standards."
        }
    ];

    const coreValues = [
        "Excellence",
        "Innovation",
        "Sustainability",
        "Integrity",
        "Collaboration",
        "Farmer-Centric Approach"
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-8">
                {/* Imo State Ministry of Livestock Development Objectives */}
                <div className="mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-[43px] font-medium text-center mb-12">
                        Imo State Ministry of Livestock Development Objectives
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {objectives.map((objective, index) => (
                            <AnimatedSection key={index} delay={0.2}>
                            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md text-center">
                                <h3 className="font-medium text-[22px] mb-3">
                                    {objective.title}
                                </h3>
                                <p className="text-dark-primary-body text-[1rem]">
                                    {objective.description}
                                </p>
                            </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* Our Core Values */}
                <div>
                    <h2 className="text-[43px] font-medium text-center mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                        {coreValues.slice(0, 4).map((value, index) => (
                            <div key={index} className="bg-white p-6 border border-gray-200 rounded-lg shadow-md text-center">
                                <span className="font-bold text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-6">
                        {coreValues.slice(4).map((value, index) => (
                            <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center w-48">
                                <span className="font-bold text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 