import React from 'react';
import SecurityHero from '../components/security/SecurityHero.jsx';
import ObligationsSection from '../components/security/ObligationsSection.jsx';
import MsstSection from '../components/security/MsstSection.jsx';
import MethodsSection from '../components/security/MethodsSection.jsx';
import EquipmentSection from '../components/security/EquipmentSection.jsx';
import BenefitsSection from '../components/security/BenefitsSection.jsx';
import Footer from '../components/Footer.jsx';
import SafetyElementsSection from '../components/security/SafetyElementsSection.jsx';
import { safetyElements } from '../data/SafetyElementsData.js';

const Security = () => {
  return (
    <div className="w-full">
      <SecurityHero />
      <ObligationsSection />
      <MsstSection />
      <SafetyElementsSection elements={safetyElements} />
      <MethodsSection />
      <EquipmentSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Security;