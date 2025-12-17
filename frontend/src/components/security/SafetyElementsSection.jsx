import React from 'react';
import { FaHardHat } from 'react-icons/fa';

const SafetyElementsSection = ({ elements = [] }) => {

  return (
    <section id="elements" className="py-20 px-6 md:px-20 lg:px-32">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Piliers de la Sécurité au Travail
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une approche complète et structurée pour garantir la sécurité de vos collaborateurs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {elements?.map((element) => (
            <div
              key={element.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
  
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {element.id}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 pr-12">
                {element.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {element.description}
              </p>

              <ul className="space-y-2">
                {element.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <FaHardHat className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`absolute inset-0 bg-gradient-to-br ${element.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SafetyElementsSection;
