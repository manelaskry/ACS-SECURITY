import Navbar from '../Navbar.jsx';
import bg from '../../assets/home-bg.jpg';

const Header = () => {
  return (
    <div
      className="relative min-h-screen mb-4 bg-cover bg-center flex items-center justify-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
      id="Header"
    >  
      <div className="absolute inset-0 bg-black/80 animate-fade-in"></div>
     
      <div className="relative z-10 w-full">
        <Navbar />
     
        <div className="flex flex-col items-center justify-center text-center text-white px-6 md:px-20 lg:px-32 min-h-screen">
          <h2 className="text-5xl sm:text-6xl md:text-[82px] font-semibold max-w-3xl animate-fade-in-up">
            Bienvenue chez ACS Santé et Sécurité au Travail
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-16 animate-fade-in-up-delay">
           <a href="/about" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition inline-block">À propos</a>
           <a href="#Services" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition inline-block">Nos Services</a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;