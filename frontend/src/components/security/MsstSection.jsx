import React from 'react';
import ServiceCard from '../ServiceCard';
import { msstElements } from '../../data/MsstData';
import bgImage from '../../assets/Ahead1.jpg';

const MsstSection = () => {
  return (
    <section id="msst" className="bg-gray-50">
      
      <div 
        className='w-full md:py-24 relative' 
        id='Services'
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
       
        <div className="absolute inset-0 bg-gray-900/50"></div>
        
      
        <div className="relative z-10">
          <div className="container mx-auto max-w-7xl">
           
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Le Système MSST (CFST 6508)
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-6">
                Une méthode reconnue pour une sécurité durable
              </p>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Le système de Management de la Sécurité et de la Santé au Travail (MSST) repose sur <span className="font-semibold text-white">10 piliers essentiels</span> pour garantir un environnement de travail sûr et conforme.
              </p>
            </div>

         
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {msstElements.map((element) => (
                <div key={element.id} className="relative">
            
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                    {element.id}
                  </div>
                             
                  <ServiceCard
                    icon={element.icon}
                    title={element.title}
                    description={element.description}
                  />
                </div>
              ))}
            </div>

            <div className=" p-8 md:p-12 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-gray-200 font-bold mb-4">
                  Le Cycle d'Amélioration Continue
                </h3>
                <p className="text-gray-200 max-w-3xl mx-auto">
                  Le système MSST s'inscrit dans une démarche d'amélioration continue selon le cycle PDCA : planifier, agir, contrôler et améliorer en continu la sécurité au travail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default MsstSection;