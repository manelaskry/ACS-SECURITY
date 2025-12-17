import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import { 
  FaClipboardList, 
  FaCheckCircle, 
  FaSearch, 
  FaChartLine,
  FaShieldAlt,
  FaExclamationTriangle,
} from 'react-icons/fa';
import bg from '../assets/Ahead1.jpg';
import AuditItem from '../components/audit/AuditItem';
import { auditItems } from '../data/auditItemsData';
import ProcessStep from '../components/audit/ProcessStep';
import { processSteps } from '../data/processStepsData';
import Footer from '../components/Footer.jsx';

const Audit = () => {
  
  return (
    <div className="w-full">
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center w-full overflow-hidden"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 w-full">
          <Navbar />

          <div className="flex flex-col justify-center items-center text-white px-6 md:px-20 lg:px-32 min-h-screen py-20 pt-32 md:pt-40">
            
            <div className="text-center max-w-5xl mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <FaClipboardList className="text-5xl md:text-6xl text-red-600" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Audit de Sécurité et Santé au Travail
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 text-gray-200">
                Évaluez la conformité de votre entreprise et identifiez les axes d'amélioration avec un audit complet réalisé par nos experts certifiés CFST.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#audit-form" 
                  className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition inline-flex items-center justify-center gap-2"
                >
                  <FaClipboardList />
                  Demander un audit gratuit
                </a>
                <a 
                  href="#process" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition inline-flex items-center justify-center gap-2"
                >
                  <FaSearch />
                  Notre processus
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>


      <section className="py-16 md:py-24 px-6 md:px-20 lg:px-32 bg-white">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi réaliser un audit de sécurité ?
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Un audit vous permet d'avoir une vision claire de votre situation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-3xl text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Conformité légale
              </h3>
              <p className="text-gray-600">
                Vérifier le respect des obligations CFST 6508 et des normes SUVA
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaExclamationTriangle className="text-3xl text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Identification des risques
              </h3>
              <p className="text-gray-600">
                Détecter les dangers présents dans votre environnement de travail
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaChartLine className="text-3xl text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Plan d'action
              </h3>
              <p className="text-gray-600">
                Recevoir des recommandations concrètes et priorisées
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-3xl text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Amélioration continue
              </h3>
              <p className="text-gray-600">
                Progresser vers l'excellence en matière de sécurité
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="process" className="py-16 md:py-24 px-6 md:px-20 lg:px-32 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre Processus d'Audit
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Une méthodologie éprouvée en 6 étapes
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((stepData, index) => (
              <ProcessStep 
                key={index}
                step={stepData.step}
                icon={stepData.icon}
                title={stepData.title}
                description={stepData.description}
                extraInfo={stepData.extraInfo}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-20 lg:px-32 bg-white">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ce que comprend votre audit
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Un service complet et détaillé
            </p>
          </div>


            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {auditItems.slice(0, 5).map((item, index) => (
                  <AuditItem 
                    key={index}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>

              <div className="space-y-4">
                {auditItems.slice(5, 10).map((item, index) => (
                  <AuditItem 
                    key={index}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>

          </div>
      </section>
      <Footer />
    </div>
  );
};

export default Audit;