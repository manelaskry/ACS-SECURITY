import React from 'react';
import { 
  FaChair,
  FaBrain,
  FaMedkit,
  FaBaby,
  FaChild,
  FaUsers,
  FaAmbulance,
  FaCheckCircle,
  FaLightbulb,
  FaClipboardList
} from 'react-icons/fa';
import useScrollAnimation from '../../hooks/useScrollAnimation.js';

const iconMap = {
  FaChair,
  FaBrain,
  FaMedkit,
  FaBaby,
  FaChild,
  FaUsers,
  FaAmbulance
};

const ServiceDetailCard = ({ service, index }) => {
  const [ref, isVisible] = useScrollAnimation();
  const isReversed = index % 2 === 1;
  const StatsIconComponent = iconMap[service.stats.iconName];

  return (
    <div 
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
        isReversed ? 'lg:grid-flow-dense' : ''
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className={isReversed ? 'lg:col-start-2' : ''}>
        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 mb-4">
          <span className="w-8 h-8 bg-[#ab0f1f] rounded-full flex items-center justify-center text-white">
            {service.id}
          </span>
          Domaine {service.id}
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {service.title}
        </h3>
        
        <p className="text-lg font-semibold text-gray-700 mb-4">
          {service.subtitle}
        </p>
        
        <p className="text-gray-600 mb-6 text-lg">
          {service.description}
        </p>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#ab0f1f] rounded-lg flex items-center justify-center text-white">
              {StatsIconComponent && <StatsIconComponent className="w-6 h-6" />}
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">{service.stats.value}</div>
              <div className="text-sm text-gray-600">{service.stats.label}</div>
            </div>
          </div>
        </div>

        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 bg-[#ab0f1f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#8a0c19] hover:shadow-lg transition"
        >
          <FaClipboardList />
          En savoir plus
        </a>
      </div>

      <div className={isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            Vos Avantages
          </h4>
          <ul className="space-y-3 mb-8">
            {service.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>

          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FaLightbulb className="text-yellow-500" />
            Nos Services
          </h4>
          <ul className="space-y-3">
            {service.services.map((srv, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#ab0f1f] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">{idx + 1}</span>
                </div>
                <span className="text-gray-700">{srv}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailCard;