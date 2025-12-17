import React from 'react';
import { benefits } from '../../data/benefitsData';

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 px-6 md:px-20 lg:px-32 bg-white">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Les Bénéfices pour Votre Entreprise
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Les résultats concrets d'un système de sécurité performant
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-12 h-12" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-red-600 via-red-700 to-orange-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer la sécurité de votre entreprise ?
          </h3>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Mettre en place le système MSST dans votre entreprise, c'est investir dans la protection de vos collaborateurs et la pérennité de votre activité.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Demander un audit gratuit
            </a>
            <a 
              href="#msst" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition"
            >
              En savoir plus sur le MSST
            </a>
          </div>
          
          <div className="mt-12 grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <p className="text-4xl font-bold mb-2">700</p>
              <p className="text-red-100">Accidents quotidiens en Suisse</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">100</p>
              <p className="text-red-100">Décès annuels liés au travail</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-red-100">Protection continue</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;