import Footer from '../components/Footer.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { servicesData } from '../data/AservicesData.js';
import HeroSection from '../components/about/HeroSection.jsx';
import LocationSection from '../components/about/LocationSection.jsx';
import ComplianceSection from '../components/about/ComplianceSection.jsx';


const About = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Section Localisation */}
        <LocationSection />



      {/* Section Nos Prestations - VERSION OPTIMISÉE */}
      <div className="py-16 md:py-24 px-6 md:px-20 lg:px-32 bg-gray-50">
        <div className="container mx-auto">
          {/* Titre */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Services de Sécurité au Travail
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour assurer la sécurité et la conformité de votre entreprise
            </p>
          </div>

          {/* Grille des prestations - Utilisation du composant avec animations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section Conformité Légale */}
      <ComplianceSection />

      <Footer/> 
    </>
  );
};

export default About;