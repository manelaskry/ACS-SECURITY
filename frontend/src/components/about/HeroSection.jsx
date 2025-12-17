import Navbar from '../Navbar';
import bg from '../../assets/test.jpg';

const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen mb-4 bg-cover bg-center flex items-center justify-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
      id="Header"
    >
      <div className="absolute inset-0 bg-black/70 animate-fade-in"></div>

      <div className="relative z-10 w-full">
        <Navbar />

        <div className="flex flex-col justify-center text-white px-6 md:px-20 lg:px-32 min-h-screen py-20 pt-32 md:pt-40">
          
          <div className="text-center mb-12 animate-fade-in-up mt-8 md:mt-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              À Propos d'ACS SST
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
              Une division du ACS Group
            </p>
          </div>

         <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up-delay">
          <p className="text-lg md:text-xl leading-relaxed mb-6 text-center">
            <span className="font-semibold">ACS Sécurité et Santé au Travail (ACS SST)</span> se consacre exclusivement à la protection des travailleurs et à la mise en conformité des entreprises avec les normes de sécurité les plus strictes. Nous sommes une division spécialisée du <span className="font-semibold">ACS Group</span>, une société suisse dédiée à l'excellence dans trois domaines complémentaires : Architecture, Construction et Sécurité.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-center text-gray-300">
            Fondée sur des valeurs d'expertise, d'engagement et d'humanité, nous accompagnons les employeurs dans le respect de leurs obligations légales face aux <span className="font-semibold text-white">700 accidents du travail quotidiens</span> et aux <span className="font-semibold text-white">100 décès annuels</span> liés aux conditions de travail en Suisse.
          </p>
        </div>

          <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 animate-fade-in-up-delay">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Afif Bennani</h2>
              <p className="text-xl md:text-2xl text-gray-300 font-light mb-4">
                Fondateur ACS & Spécialiste CFST
              </p>
              <div className="flex items-center justify-center gap-2 text-lg text-gray-300 mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Conthey, Valais, Suisse</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <p className="text-lg font-semibold mb-2">Architecture</p>
                <p className="text-sm text-gray-400">Vision technique</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <p className="text-lg font-semibold mb-2">Construction</p>
                <p className="text-sm text-gray-400">Expertise terrain</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <p className="text-lg font-semibold mb-2">Sécurité</p>
                <p className="text-sm text-gray-400">Prévention des risques</p>
              </div>
            </div>

            <p className="text-center text-lg leading-relaxed text-gray-200 italic">
              "Spécialiste certifié de la sécurité au travail (CFST), je mets mon expertise au service de la protection des travailleurs avec une approche rigoureuse et humaine de la prévention des risques professionnels."
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;