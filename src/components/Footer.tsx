
import { Github, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sistema Local</h3>
            <p className="text-sm text-gray-600">
              Plataforma integral de información y recursos para la gestión local.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-sm text-gray-600 hover:text-gray-900">Inicio</a></li>
              <li><a href="#servicios" className="text-sm text-gray-600 hover:text-gray-900">Servicios</a></li>
              <li><a href="#componentes" className="text-sm text-gray-600 hover:text-gray-900">Componentes</a></li>
              <li><a href="#contacto" className="text-sm text-gray-600 hover:text-gray-900">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Términos de Uso</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Política de Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Redes Sociales</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600">
          <p>© 2024 Sistema de Información Local. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
