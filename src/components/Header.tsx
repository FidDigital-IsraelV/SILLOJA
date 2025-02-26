
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="text-xl font-semibold">
              Sistema de Información Local
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Servicios
            </a>
            <a href="#componentes" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Componentes
            </a>
            <a href="#contacto" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Contacto
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b">
          <div className="px-4 py-2">
            <nav className="flex flex-col gap-4">
              <a href="#inicio" className="text-sm font-medium hover:text-gray-600 transition-colors py-2">
                Inicio
              </a>
              <a href="#servicios" className="text-sm font-medium hover:text-gray-600 transition-colors py-2">
                Servicios
              </a>
              <a href="#componentes" className="text-sm font-medium hover:text-gray-600 transition-colors py-2">
                Componentes
              </a>
              <a href="#contacto" className="text-sm font-medium hover:text-gray-600 transition-colors py-2">
                Contacto
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
