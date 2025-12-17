import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const LocationSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className="py-16 md:py-24 px-6 md:px-20 lg:px-32 bg-white">
      <div className="container mx-auto">
        {/* Titre */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Où nous trouver ?
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Basés à Conthey, au cœur du Valais, nous intervenons dans toute la Suisse romande
          </p>
        </div>

        {/* Map et Coordonnées */}
        <div className="grid md:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Google Map - 60% */}
          <div className={`md:col-span-3 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] md:h-[500px] hover:shadow-2xl transition-shadow duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.0123456789!2d7.2904!3d46.2203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478eaf4b69f8b3f9%3A0xc4f8b9a0d9c4b9f0!2sChemin%20des%20%C3%89coliers%2012%2C%201964%20Conthey%2C%20Switzerland!5e0!3m2!1sfr!2s!4v1234567890123!5m2!1sfr!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation ACS SST"
              ></iframe>
            </div>
          </div>

          {/* Coordonnées - 40% */}
          <div className={`md:col-span-2 flex flex-col justify-center ${isVisible ? 'animate-fade-in-up-delay' : 'opacity-0'}`}>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Coordonnées
              </h3>

              {/* Adresse */}
              <div className="mb-6">
                <div className="flex items-start gap-3 mb-2">
                  <FaMapMarkerAlt className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Adresse</p>
                    <p className="text-gray-600">Chemin des Écoliers 12/ 1964 Conthey, Valais</p>
                    <p className="text-gray-600"></p>
                    <p className="text-gray-600">Suisse</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <div className="flex items-start gap-3 mb-2">
                  <FaEnvelope className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a 
                      href="mailto:contact@acs-securite.ch" 
                      className="text-red-700 hover:text-red-800 hover:underline transition-colors"
                    >
                      info@acs-group.ch
                    </a>
                  </div>
                </div>
              </div>

              {/* Téléphone */}
              <div className="mb-6">
                <div className="flex items-start gap-3 mb-2">
                  <FaPhone className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Téléphone</p>
                    <a 
                      href="tel:+41799003991" 
                      className="text-red-700 hover:text-red-800 hover:underline transition-colors"
                    >
                      +41 79 900 39 91 <br/>
                      +41 76 584 39 91
                    </a>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <FaClock className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Horaires</p>
                    <p className="text-gray-600">Lun - Ven : 8h00 - 17h00</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;