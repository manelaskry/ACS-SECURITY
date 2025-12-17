import React from 'react';
import { FaClipboardCheck, FaHardHat} from 'react-icons/fa';
import Navbar from '../Navbar';
 const stats = [
    { value: "700", label: "Accidents quotidiens en Suisse" },
    { value: "100", label: "Décès annuels liés au travail" },
    { value: "2.5M", label: "Jours d'absence par an" },
    { value: "8.5Mrd", label: "Coût économique annuel" }
  ];
const SecurityHero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 flex items-center">
     <Navbar /> 
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 container mx-auto px-6 md:px-20 lg:px-32 pb-12 pt-32">
          <div className="max-w-4xl">
            <div className="inline-block bg-red-800 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaHardHat className="inline h-3 l-4 mb-1 mr-2" />
              Sécurité au Travail
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Votre Sécurité, Notre Priorité Absolue
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Des solutions complètes pour prévenir les accidents, protéger vos équipes et garantir un environnement de travail conforme aux normes suisses les plus strictes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#elements" 
                className="bg-red-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition inline-flex items-center justify-center gap-2"
              >
                <FaHardHat />
                Nos Solutions Sécurité
              </a>
              <a 
                href="#process" 
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition inline-flex items-center justify-center gap-2"
              >
                <FaClipboardCheck />
                Notre Démarche
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default SecurityHero;