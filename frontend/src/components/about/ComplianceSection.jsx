import { MdSecurity, MdChecklist, MdCheckCircle } from 'react-icons/md';

const ComplianceSection = () => {
  return (
    <div className="py-16 md:py-24 px-6 md:px-20 lg:px-32 bg-gradient-to-br from-red-50 to-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Titre */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conformité & Certifications
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Nos références et méthodologies reconnues
          </p>
        </div>

        {/* Contenu */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* CFST 6508 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MdSecurity className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">CFST 6508</h3>
                <p className="text-sm text-gray-600">Obligations légales de l'employeur</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              La directive CFST 6508 définit les <span className="font-semibold">obligations générales de l'employeur</span> en matière de sécurité au travail. Chaque employeur doit :
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <MdCheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Identifier les dangers pour protéger les travailleurs</span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Prendre les mesures de protection nécessaires</span>
              </li>
              <li className="flex items-start gap-2">
                <MdCheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Former et informer les travailleurs</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-red-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Afif Bennani</span> est <span className="font-semibold text-red-600">spécialiste certifié CFST</span>, reconnu pour accompagner les entreprises dans le respect de ces obligations.
              </p>
            </div>
          </div>

          {/* SUVA STOP */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up-delay">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MdChecklist className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">SUVA STOP</h3>
                <p className="text-sm text-gray-600">Méthodologie de prévention</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              La méthode STOP de la SUVA établit une <span className="font-semibold">hiérarchie des mesures de prévention</span>, de la plus efficace à la moins efficace :
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  S
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Substitution</p>
                  <p className="text-sm text-gray-600">Remplacer le danger par quelque chose de moins dangereux</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  T
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Techniques</p>
                  <p className="text-sm text-gray-600">Mesures techniques (machines, équipements de protection collective)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  O
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Organisationnelles</p>
                  <p className="text-sm text-gray-600">Procédures, instructions de travail, signalisation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  P
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Personnelles</p>
                  <p className="text-sm text-gray-600">Équipements de protection individuelle (EPI)</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-gray-200">
          <div className="text-center animate-fade-in-up">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-3 mx-auto hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-red-600">CFST</span>
            </div>
            <p className="text-sm text-gray-600 font-medium">Certifié CFST</p>
          </div>
          <div className="text-center animate-fade-in-up-delay">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-3 mx-auto hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-red-600">SUVA</span>
            </div>
            <p className="text-sm text-gray-600 font-medium">Méthode SUVA</p>
          </div>
          <div className="text-center animate-fade-in-up-delay">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-3 mx-auto hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-red-600">15+</span>
            </div>
            <p className="text-sm text-gray-600 font-medium">Années d'expertise</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceSection;