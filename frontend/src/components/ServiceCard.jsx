import React from 'react';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up h-full flex flex-col">
      
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110">
        <Icon className="w-8 h-8 text-red-600" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      <div className="text-gray-600 flex-grow">
        {description}
      </div>

    </div>
  );
};

export default ServiceCard;