import React, { useEffect, useState } from 'react'
import logo from '../assets/ACS1.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if(showMobileMenu){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={logo} alt="ACS Logo"     className="h-36 md:h-36 lg:h-36 w-auto object-contain"

 />     
           <ul className='hidden md:flex gap-11 text-white'>
            <a href="#Header" className='cursor-pointer hover:text-gray-400'>À modifier</a>
            <a href="#Header" className='cursor-pointer hover:text-gray-400'>Sécurité</a>
            <a href="#Header" className='cursor-pointer hover:text-gray-400'>Formations</a>
            <a href="#Header" className='cursor-pointer hover:text-gray-400'>Références</a>
            <a href="#Header" className='cursor-pointer hover:text-gray-400'>Audit</a>
           </ul>
    
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Contact</button>
        <FaBars onClick={()=> setShowMobileMenu(true)} className='md:hidden text-white text-3xl cursor-pointer'/>   
     </div>


    {/*--- Mobile Menu ---*/}

    <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
            <FaTimes onClick={()=> setShowMobileMenu(false)} className='md:hidden text-black text-3xl cursor-pointer'/>   
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-meduim '>
            <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>À propos</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Sécurité</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Formations</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Références</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Audit</a>
        </ul>
    </div>

   </div>
    
    
    
  )
}

export default Navbar
