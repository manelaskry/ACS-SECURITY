import Footer from '../components/Footer.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { servicesData } from '../data/AservicesData.js';
import HeroSection from '../components/about/HeroSection.jsx';
import LocationSection from '../components/about/LocationSection.jsx';
import ComplianceSection from '../components/about/ComplianceSection.jsx';
import useScrollAnimation from '../hooks/useScrollAnimation.js';

const About = () => {
  const [servicesRef, servicesVisible] = useScrollAnimation();

  return (
    <>    
      <HeroSection />
      <LocationSection />
      <div ref={servicesRef} className="py-16 md:py-24 px-6 md:px-20 lg:px-32 bg-gray-50">
        <div className="container mx-auto">
          {/* Titre */}
          <div className={`text-center mb-16 ${servicesVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Services de Sécurité au Travail
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour assurer la sécurité et la conformité de votre entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {servicesData.map((service, index) => (
              <div 
                key={service.id}
                className={servicesVisible ? 'animate-fade-in-up' : 'opacity-0'}
                style={{ animationDelay: servicesVisible ? `${index * 0.1}s` : '0s' }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ComplianceSection />

      <Footer/> 
    </>
  );
};

export default About;