import useScrollAnimation from "../../hooks/useScrollAnimation";
import { FaHeartbeat, FaUserMd } from "react-icons/fa";
import bgImage from "../../assets/Ahead1.jpg";

const FinalCTASection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      className="relative py-20 px-6 md:px-20 lg:px-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
  
      <div className="absolute inset-0 bg-gray-900/70"></div>

    
      <div
        ref={ref}
        className={`relative z-10 container mx-auto max-w-5xl text-center text-white transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <FaHeartbeat className="w-16 h-16 mx-auto mb-6" />

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Investir dans la santé au travail aujourd’hui, c’est éviter l’arrêt de vos activités demain
        </h2>

        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Des personnes en bonne santé physique et mentale sont plus engagées,
          plus performantes et mieux protégées dans leurs activités professionnelles.
          Contactez-nous pour un accompagnement personnalisé.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold mb-2">-30%</div>
            <div className="text-gray-300">Arrêts maladie</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold mb-2">+45%</div>
            <div className="text-gray-300">Productivité</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold mb-2">+60%</div>
            <div className="text-gray-300">Engagement</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#ab0f1f] px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition shadow-lg"
          >
            <FaUserMd />
            Consultation Gratuite
          </a>

          <a
            href="tel:+41123456789"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#ab0f1f] transition"
          >
            <FaHeartbeat />
            Appelez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
