import React from 'react';

const ProcessStep = ({ step, icon: Icon, title, description, extraInfo }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl p-8 shadow-md">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
          {step}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <Icon className="text-2xl text-red-600" />
          <h3 className="text-2xl font-bold text-gray-900">
            {title}
          </h3>
        </div>
        <p className="text-gray-700 mb-4">
          {description}
        </p>
        {extraInfo && (
          <div className="bg-red-50 rounded-lg p-4">
            <p className="text-sm text-gray-700 font-medium">
              <extraInfo.icon className="inline mr-2 text-red-600" />
              {extraInfo.text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessStep;