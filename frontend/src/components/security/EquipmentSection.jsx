import React from 'react';
import { equipmentCategories } from '../../data/equipmentData';

const EquipmentSection = () => {
  return (
    <section id="equipment" className="py-16 md:py-24 px-6 md:px-20 lg:px-32 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Moyens Matériels
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            S'équiper pour protéger efficacement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow min-h-[500px]"
                style={{
                  backgroundImage: `url(${category.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gray-900/60"></div>

                <div className="relative z-10 p-8 text-white flex flex-col h-full">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 text-white text-2xl">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <p className="text-gray-200 mb-4">{category.description}</p>

                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-100">
                        <span className="text-red-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Besoin de conseils pour votre équipement ?
          </h3>
          <p className="text-lg mb-8 text-red-100">
            Nos experts vous accompagnent dans le choix des équipements adaptés à vos besoins et conformes aux normes SUVA.
          </p><a
          
            href="#contact"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
          >
            Demander un conseil
          </a>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;