import React from 'react';
import { 
  FaHeartbeat,
  FaMedkit,
  FaUserMd,
  FaHandHoldingHeart,
  FaAmbulance,
} from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation.js';
import ServiceDetailCard from '../components/health/ServiceDetailCard.jsx';
import { healthServicesData } from '../data/HealthData.js';
import { emergencies } from '../data/EmergenciesData.js';
import FinalCTASection from '../components/health/FinalCTASection.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const HealthProtectionPage = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useScrollAnimation();
   
  return (
    <div className="w-full bg-gray-50">
      < Navbar />
       <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-[#ab0f1f] to-gray-900 flex items-center">
       <div className="absolute inset-0 bg-black/40"></div>
      
        <div 
        ref={heroRef}
        className={`relative z-10 container mx-auto px-6 md:px-20 lg:px-32 pt-20 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        >
        <div className="max-w-4xl">
          <div className="inline-block bg-[#ab0f1f] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaHeartbeat className="inline mr-2" />
            Protection de la Santé
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
           Santé et bien-être au travail
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Une approche globale pour garantir le bien-être physique et mental au travail. De l'ergonomie aux premiers secours, en passant par la protection des populations vulnérables.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
            <p className="text-lg text-gray-100 leading-relaxed">
              <FaHandHoldingHeart className="inline text-[#ab0f1f] mr-2 mb-1" />
              "Des employés en bonne santé sont plus motivés, plus productifs et moins absents. Investir dans leur santé, c'est investir dans la réussite de votre entreprise."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              className="bg-[#ab0f1f] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#8a0c19] transition inline-flex items-center justify-center gap-2"
            >
              <FaHeartbeat />
              Découvrir Nos Solutions
            </a>
            <a 
              href="#contact" 
              className="bg-white text-[#ab0f1f] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition inline-flex items-center justify-center gap-2"
            >
              <FaUserMd />
              Consultation Gratuite
            </a>
          </div>
        </div>
      </div>
     </section>

      <section id="services" className="py-20 px-6 md:px-20 lg:px-32">
      <div className="container mx-auto max-w-7xl">
        <div 
        ref={servicesRef}
        className={`text-center mb-16 transition-all duration-700 ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos 5 Domaines d'Expertise Santé
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une protection complète pour tous vos collaborateurs, à chaque étape de leur vie professionnelle
          </p>
        </div>

        <div className="space-y-20">
          {healthServicesData.map((service, index) => (
            <ServiceDetailCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6 md:px-20 lg:px-32 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container mx-auto max-w-7xl">
          <div 
          ref={servicesRef}
          className={`text-center mb-16 transition-all duration-700 ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          >
          <div className="text-center mb-12">
            <FaAmbulance className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Les 10 Urgences Médicales les Plus Fréquentes
            </h2>
            <p className="text-xl text-red-100">
              Être préparé peut sauver des vies. Notre concept de premiers secours couvre toutes ces situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {emergencies.map((emergency, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                  {idx + 1}
                </div>
                <p className="font-semibold">{emergency}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Votre Plan de Premiers Secours Personnalisé</h3>
            <p className="text-red-100 mb-6 max-w-3xl mx-auto">
              Nous élaborons un concept adapté à vos risques opérationnels, votre taille et votre localisation. 
              Pour les entreprises de 250+ employés, le plan de premiers secours fait partie intégrante du plan d'urgence.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition"
            >
              <FaMedkit />
              Créer Mon Plan de Premiers Secours
            </a>
          </div>
        </div>
        </div>
    </section>
    <FinalCTASection />
    <Footer />
    </div>
  );
};

export default HealthProtectionPage;