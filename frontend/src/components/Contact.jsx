import React, { useEffect, useRef, useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Logique d'envoi du formulaire
    console.log('Form submitted:', formData)
    alert('Merci ! Nous vous contacterons bientôt.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <div className='w-full py-16 md:py-24 bg-white' id='Contact'>
      <div className='container mx-auto px-6 md:px-20 lg:px-32'>
        {/* Title */}
        <h1 className='text-2xl sm:text-4xl font-bold mb-4 text-center animate-fade-in-up'>
          Contactez-<span className='underline underline-offset-4 decoration-1 font-light'>nous</span>
        </h1>
        <p className='text-gray-600 text-center mb-16 max-w-2xl mx-auto animate-fade-in-up'>
          Vous avez un projet ou besoin d'un audit ? Notre équipe est à votre disposition
        </p>

        {/* Content Grid */}
        <div ref={sectionRef} className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
          {/* Contact Info */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <h2 className='text-2xl font-semibold mb-8 text-gray-800'>Informations de contact</h2>
            
            {/* Contact Items */}
            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='bg-red-100 p-3 rounded-lg'>
                  <FaPhone className='text-2xl text-red-700' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-800 mb-1'>Téléphone</h3>
                  <p className='text-gray-600'>+41 79 900 39 91</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='bg-red-100 p-3 rounded-lg'>
                  <FaEnvelope className='text-2xl text-red-700' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-800 mb-1'>Email</h3>
                  <p className='text-gray-600'>info@acs-group.ch</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='bg-red-100 p-3 rounded-lg'>
                  <FaMapMarkerAlt className='text-2xl text-red-700' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-800 mb-1'>Adresse</h3>
                  <p className='text-gray-600'>Chemin des Écoliers 12 1964 Conthey, Suisse</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className='mt-8 bg-gray-50 p-6 rounded-xl'>
              <h3 className='font-semibold text-gray-800 mb-4'>Horaires d'ouverture</h3>
              <div className='space-y-2 text-gray-600'>
                <p>Lundi - Vendredi: 8h00 - 18h00</p>
                <p>Samedi: Sur rendez-vous</p>
                <p>Dimanche: Fermé</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <form onSubmit={handleSubmit} className='bg-gray-50 p-8 rounded-xl shadow-lg'>
              <div className='space-y-6'>
                <div>
                  <label htmlFor='name' className='block text-gray-700 font-medium mb-2'>
                    Nom complet *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent'
                    placeholder='Votre nom'
                  />
                </div>

                <div>
                  <label htmlFor='email' className='block text-gray-700 font-medium mb-2'>
                    Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent'
                    placeholder='votre@email.com'
                  />
                </div>

                <div>
                  <label htmlFor='company' className='block text-gray-700 font-medium mb-2'>
                    Entreprise
                  </label>
                  <input
                    type='text'
                    id='company'
                    name='company'
                    value={formData.company}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent'
                    placeholder='Nom de votre entreprise'
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-gray-700 font-medium mb-2'>
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows='5'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent resize-none'
                    placeholder='Décrivez votre projet ou votre demande...'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full bg-red-700 text-white px-8 py-4 rounded-lg font-medium hover:bg-red-800 transition-colors'
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

