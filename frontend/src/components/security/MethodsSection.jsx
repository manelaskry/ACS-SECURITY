import React from "react";
import { FaChartBar, FaFileAlt, FaUsers, FaCheckCircle } from "react-icons/fa";
import StopMethodSection from "./StopMethodSection";


const MethodsSection = () => {
  return (
    <section id="methods" className="py-16 md:py-24 px-6 md:px-20 lg:px-32 bg-white">
      <div className="container mx-auto max-w-7xl">


        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            De la Théorie à la Pratique
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Comment ACS SST met en œuvre les piliers de sécurité de manière concrète
          </p>
        </div>

        <div className="space-y-12">
     
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                1
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Évaluation & identification des risques
              </h3>
              <p className="text-gray-700 mb-4">
                Analyse complète sur site pour identifier tous les dangers potentiels : équipements, processus, environnement de travail, facteurs humains et organisationnels.
              </p>

              <ul className="space-y-2">
              {[
                "Diagnostics terrain approfondis",
                "Cartographie détaillée des dangers",
                "Documentation complète et traçable"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600">
                  <FaCheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            </div>
          </div>

          <StopMethodSection />

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                3
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Mise en place du système MSST
              </h3>
              <p className="text-gray-700 mb-4">
                Déploiement complet du système de management de la sécurité selon les directives CFST 6508.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Organisation structurée",
                "Planification des actions",
                "Formation du personnel",
                "Audits réguliers"
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                4
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Procédures internes</h3>
              <p className="text-gray-700 mb-4">
                Mise en place de procédures claires et documentées pour une gestion optimale de la sécurité au quotidien.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Plans d'urgence", desc: "Évacuation, incendie, premiers secours" },
                  { title: "Fiches de poste", desc: "Risques spécifiques et mesures de prévention" },
                  { title: "Consignes spécifiques", desc: "Instructions adaptées à chaque activité" },
                  { title: "Contrôles réguliers", desc: "Vérifications périodiques et traçabilité" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                5
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Formation & sensibilisation
              </h3>
              <p className="text-gray-700 mb-4">
                Sessions pratiques et théoriques pour développer une véritable culture de la sécurité.
              </p>

              <ul className="space-y-2">
              {[
                "Sessions pratiques adaptées au secteur d'activité",
                "Onboarding sécurité pour les nouveaux collaborateurs",
                "Exercices d'évacuation et gestion des urgences",
                "Sensibilisation continue et rappels réguliers"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-600">
                  <FaCheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                6
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Suivi & amélioration continue
              </h3>
              <p className="text-gray-700 mb-4">
                Accompagnement dans la durée pour garantir le maintien et l'amélioration constante de votre système de sécurité.
              </p>

              
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
              <div className="grid sm:grid-cols-3 gap-6">

               
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaChartBar className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900">Monitoring</p>
                  <p className="text-sm text-gray-600">Suivi des indicateurs</p>
                </div>

              
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaFileAlt className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900">Rapports</p>
                  <p className="text-sm text-gray-600">Documentation détaillée</p>
                </div>

             
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaUsers className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900">Audits</p>
                  <p className="text-sm text-gray-600">Évaluations régulières</p>
                </div>

              </div>
            </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MethodsSection;
