import React from 'react';
import { FaCheck } from 'react-icons/fa';

const AuditItem = ({ title, description }) => {
  return (
    <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
      <FaCheck className="text-2xl text-green-600 flex-shrink-0 mt-1" />
      <div>
        <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default AuditItem;