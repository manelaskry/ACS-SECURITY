import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import bgImage from '../../assets/domain.jpg'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import { services } from '../../data/domainData'

const Domains = () => {
  const [sectionRef, isVisible] = useScrollAnimation()

  return (
    <div 
      className='w-full py-16 md:py-24 relative' 
      id='Services'
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className='absolute inset-0 bg-white/50'></div>

      <div className='container mx-auto px-6 md:px-20 lg:px-32 relative z-10'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-4 text-center animate-fade-in-up'>
          Nos <span className='underline underline-offset-4 decoration-1 font-light'>Services</span>
        </h1>

        <p className='text-gray-800 text-center mb-16 text-l max-w-2xl mx-auto animate-fade-in-up'>
          Découvrez notre gamme complète de services pour assurer la sécurité et la conformité de votre entreprise
        </p>

        <div ref={sectionRef} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className='mb-6 flex justify-center lg:justify-start'>
                  <IconComponent className="text-4xl md:text-5xl text-red-700" />
                </div>

                <h3 className='text-xl md:text-2xl font-semibold mb-4 text-gray-800 text-center lg:text-left'>
                  {service.title}
                </h3>

                <p className='text-gray-600 mb-6 leading-relaxed text-center lg:text-left'>
                  {service.description}
                </p>

                <div className='flex items-start gap-2 bg-red-50 p-4 rounded-lg'>
                  <FaCheckCircle className='text-red-700 flex-shrink-0 mt-1' />
                  <p className='text-sm text-gray-700'>
                    {service.badge}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div 
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} 
          style={{ transitionDelay: '600ms' }}
        >
          <p className='text-gray-800 mb-6 text-lg'>
            Prêt à améliorer la sécurité de votre entreprise ?
          </p>

          <div className='flex flex-wrap justify-center gap-4'>
            <a 
              href="#Contact" 
              className='bg-red-700 text-white px-8 py-3 rounded-full font-medium hover:bg-red-800 transition-colors'
            >
              Demander un audit
            </a>

            <a 
              href="#About" 
              className='bg-transparent border-2 border-red-700 text-red-700 px-8 py-3 rounded-full font-medium hover:bg-red-700 hover:text-white transition-colors'
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Domains