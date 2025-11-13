import React, { useEffect, useRef, useState } from 'react'
import about from '../../assets/about.jpg'
import { FaAward, FaClipboardCheck, FaShieldAlt, FaBuilding } from 'react-icons/fa'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const sectionRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    if (statsRef.current) statsObserver.observe(statsRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
      if (statsRef.current) statsObserver.unobserve(statsRef.current)
    }
  }, [])

  return (
    <div className='w-full overflow-hidden min-h-screen' id='About'>
      {/* Title Section */}
      <div className='container mx-auto px-6 md:px-20 lg:px-32 py-10'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-8 text-center animate-fade-in-up'>
          À propos <span className='underline underline-offset-4 decoration-1 font-light'>ACS Santé et Sécurité au Travail</span>
        </h1>
      </div>

      <div ref={sectionRef} className='flex flex-col lg:flex-row items-start w-full gap-8 lg:gap-0'>
        <div className={`relative w-full lg:w-1/2 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}>
          <img 
            src={about}
            alt="About Us" 
            className='w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover'
          />
          
          {/* Quote Overlay */}
          <div className={`absolute bottom-4 right-4 lg:bottom-8 lg:right-[-60px] p-4 max-w-md lg:max-w-lg xl:max-w-xl z-10 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <div className="bg-gray-800/80 backdrop-blur-sm text-white p-6 md:p-8 rounded-lg shadow-2xl">
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                ACS Group <span className='underline underline-offset-4 decoration-1 font-light'>Santé et sécurité au travail</span>
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                "Chaque jour, 700 personnes sont victimes d'un accident du travail.
                ACS Sécurité Travail vous accompagne pour réduire ce chiffre à zéro"
              </p>
            </div>
          </div>
        </div>

        
        <div ref={statsRef} className='w-full lg:w-1/2 flex items-center justify-center lg:justify-start px-6 md:px-12 lg:px-16 xl:px-48 py-8 lg:py-0 lg:mt-28'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-10 xl:gap-16 max-w-lg w-full'>
            
            <div className={`flex items-start gap-4 transition-all duration-700 ${
              statsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`} style={{ transitionDelay: '0ms' }}>
              <FaAward className='text-3xl md:text-4xl text-red-700 flex-shrink-0 mt-1' />
              <div>
                <p className='text-4xl md:text-5xl font-medium text-gray-800 mb-2'>+10</p>
                <p className='text-gray-600 text-sm md:text-base'>Années d'expérience STPS</p>
              </div>
            </div>

            <div className={`flex items-start gap-4 transition-all duration-700 ${
              statsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`} style={{ transitionDelay: '150ms' }}>
              <FaClipboardCheck className='text-3xl md:text-4xl text-red-700 flex-shrink-0 mt-1' />
              <div>
                <p className='text-4xl md:text-5xl font-medium text-gray-800 mb-2'>100%</p>
                <p className='text-gray-600 text-sm md:text-base'>Audits personnalisés</p>
              </div>
            </div>

            <div className={`flex items-start gap-4 transition-all duration-700 ${
              statsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`} style={{ transitionDelay: '300ms' }}>
              <FaShieldAlt className='text-3xl md:text-4xl text-red-700 flex-shrink-0 mt-1' />
              <div>
                <p className='text-4xl md:text-5xl font-medium text-gray-800 mb-2'>100%</p>
                <p className='text-gray-600 text-sm md:text-base'>Conformité CFST 6508</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className={`flex items-start gap-4 transition-all duration-700 ${
              statsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`} style={{ transitionDelay: '450ms' }}>
              <FaBuilding className='text-3xl md:text-4xl text-red-700 flex-shrink-0 mt-1' />
              <div>
                <p className='text-4xl md:text-5xl font-medium text-gray-800 mb-2'>+15</p>
                <p className='text-gray-600 text-sm md:text-base'>Entreprises accompagnées</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default About