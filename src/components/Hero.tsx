
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight fade-up">
            Sistema de Información Local
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto fade-up" style={{ animationDelay: '0.1s' }}>
            Navegue por los diferentes recursos disponibles en este repositorio realizando búsquedas por palabras clave
          </p>
          <div className="mt-10 fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="max-w-xl mx-auto flex items-center gap-2 bg-white rounded-lg shadow-sm border p-2">
              <input
                type="text"
                placeholder="Buscar recursos..."
                className="flex-1 px-4 py-2 outline-none text-sm"
              />
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md flex items-center gap-2 hover:opacity-90 transition-opacity">
                Buscar
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
