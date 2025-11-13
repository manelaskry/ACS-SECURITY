import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='w-full bg-gray-900 text-white py-12'>
      <div className='container mx-auto px-6 md:px-20 lg:px-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
          {/* Company Info */}
          <div>
            <h3 className='text-2xl font-bold mb-4'>ACS Sécurité</h3>
            <p className='text-gray-400 mb-4'>
              Votre partenaire de confiance pour la sécurité et la santé au travail en Suisse.
            </p>
            <div className='flex gap-4'>
              <a href='#' className='text-gray-400 hover:text-white transition'>
                <FaLinkedin className='text-2xl' />
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition'>
                <FaFacebook className='text-2xl' />
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition'>
                <FaTwitter className='text-2xl' />
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition'>
                <FaInstagram className='text-2xl' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Liens rapides</h4>
            <ul className='space-y-2'>
              <li>
                <a href='#Header' className='text-gray-400 hover:text-white transition'>
                  Accueil
                </a>
              </li>
              <li>
                <a href='#About' className='text-gray-400 hover:text-white transition'>
                  À propos
                </a>
              </li>
              <li>
                <a href='#Services' className='text-gray-400 hover:text-white transition'>
                  Services
                </a>
              </li>
              <li>
                <a href='#Contact' className='text-gray-400 hover:text-white transition'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Nos services</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>Audits de sécurité</li>
              <li>Formations STPS</li>
              <li>Accompagnement CFST 6508</li>
              <li>Évaluation des risques</li>
              <li>Conseil réglementaire</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Contact</h4>
            <ul className='space-y-3 text-gray-400'>
              <li className='flex items-center gap-2'>
                <FaPhone className='text-red-700' />
                +41 79 900 39 91
              </li>
              <li className='flex items-center gap-2'>
                <FaEnvelope className='text-red-700' />
                info@acs-group.ch
              </li>
              <li className='flex items-center gap-2'>
                <FaMapMarkerAlt className='text-red-700' />
                Chemin des Écoliers 12 1964 Conthey, Suisse
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm text-center md:text-left'>
              © {currentYear} ACS Santé et Sécurité Travail. Tous droits réservés. | Partie de ACS Group
            </p>
            <div className='flex gap-6 text-sm'>
              <a href='#' className='text-gray-400 hover:text-white transition'>
                Mentions légales
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition'>
                Politique de confidentialité
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition'>
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer