import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function PartnerSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center py-20 px-6 md:px-12 lg:px-20 text-center"
      style={{ backgroundImage: "url('/images/gradient.png')" }} 
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-3xl mx-auto text-white">
        <AnimatedSection>
        {/* Title */}

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner With Us To Transform Livestock Development In Imo
        </h2>

        {/* Subtitle */}
        <p className="mb-8 text-sm md:text-base leading-relaxed text-gray-200">
          Join hands with the Ministry of Livestock Development to strengthen
          food security, empower farmers, improve animal health, and drive
          sustainable livestock practices across Imo State. Together, we can
          build a stronger agricultural economy and healthier communities.
        </p>
        </AnimatedSection>

        {/* Button */}
        <Link
          href="/contact-us"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
