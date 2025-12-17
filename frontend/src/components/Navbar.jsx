import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
import logo from '../assets/ACS2.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  const toggleMobileDropdown = (e) => {
    e.stopPropagation();
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8 lg:px-16 xl:px-32">
        
        <Link to="/" className="z-50">
          <img 
            src={logo} 
            alt="ACS Logo" 
            className="h-16 md:h-20 object-contain" 
          />
        </Link>

        <ul className="hidden lg:flex mx-6 items-center gap-6 xl:gap-8 text-white text-sm xl:text-base">
          
          <li className="relative group">
            <button className="flex items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors py-2">
              Sécurité & Santé au Travail
              <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
            </button>

            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="w-64 bg-white text-gray-800 rounded-lg shadow-xl py-2">
                <Link 
                  to="/security" 
                  className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition-colors"
                >
                  <FaChevronRight className="text-xs text-red-600" />
                  <span>Sécurité au travail</span>
                </Link>
                <Link 
                  to="/health" 
                  className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition-colors"
                >
                  <FaChevronRight className="text-xs text-red-600" />
                  <span>Protection de la santé</span>
                </Link>
              </div>
            </div>
          </li>

          <li>
            <Link to="/fire-protection" className="hover:text-gray-300 transition-colors">
              Protection Incendie
            </Link>
          </li>
          <li>
            <Link to="/bim-prevention" className="hover:text-gray-300 transition-colors">
              BIM & Prévention
            </Link>
          </li>
          <li>
            <Link to="/formations" className="hover:text-gray-300 transition-colors">
              Formations
            </Link>
          </li>
          <li>
            <Link to="/audit" className="hover:text-gray-300 transition-colors">
              Audit
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-gray-300 transition-colors">
              Shop
            </Link>
          </li>
        </ul>

        <button className="hidden lg:block bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors font-medium">
          Contact
        </button>

        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden text-white text-2xl cursor-pointer z-50 p-2"
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={closeMobileMenu}
            className="text-gray-800 text-2xl cursor-pointer p-2"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col px-6 pb-6">
          <ul className="flex flex-col gap-1 text-base">
            
            <li className="border-b border-gray-200">
              <button
                onClick={toggleMobileDropdown}
                className="flex w-full justify-between items-center py-4 font-semibold text-gray-800"
              >
                <span>Sécurité & Santé au Travail</span>
                <FaChevronDown
                  className={`text-sm transition-transform duration-200 ${
                    mobileDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileDropdownOpen ? "max-h-40 mb-2" : "max-h-0"
                }`}
              >
                <div className="pl-4 space-y-1">
                  <Link
                    to="/security"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-2 py-3 text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <FaChevronRight className="text-xs text-red-600" />
                    <span>Sécurité au travail</span>
                  </Link>
                  <Link
                    to="/health-protection"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-2 py-3 text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <FaChevronRight className="text-xs text-red-600" />
                    <span>Protection de la santé</span>
                  </Link>
                </div>
              </div>
            </li>

            <li className="border-b border-gray-200">
              <Link
                to="/fire-protection"
                onClick={closeMobileMenu}
                className="block py-4 font-semibold text-gray-800"
              >
                Protection Incendie
              </Link>
            </li>

            <li className="border-b border-gray-200">
              <Link
                to="/bim-prevention"
                onClick={closeMobileMenu}
                className="block py-4 font-semibold text-gray-800"
              >
                BIM & Prévention
              </Link>
            </li>

            <li className="border-b border-gray-200">
              <Link
                to="/formations"
                onClick={closeMobileMenu}
                className="block py-4 font-semibold text-gray-800"
              >
                Formations
              </Link>
            </li>

            <li className="border-b border-gray-200">
              <Link
                to="/audit"
                onClick={closeMobileMenu}
                className="block py-4 font-semibold text-gray-800"
              >
                Audit
              </Link>
            </li>

            <li className="border-b border-gray-200">
              <Link
                to="/shop"
                onClick={closeMobileMenu}
                className="block py-4 font-semibold text-gray-800"
              >
                Shop
              </Link>
            </li>
          </ul>

          <button className="mt-6 w-full bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;