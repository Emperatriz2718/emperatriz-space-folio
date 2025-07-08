
import { Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background stars animation */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container px-4 py-16 relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image Placeholder */}
          <div className="mx-auto w-48 h-48 bg-gradient-to-br from-space-aurora to-space-stellar rounded-full flex items-center justify-center stellar-glow animate-glow">
            <div className="w-44 h-44 bg-space-deep rounded-full flex items-center justify-center">
              <span className="text-6xl font-orbitron font-bold text-gradient">EM</span>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-orbitron font-black text-gradient animate-float">
              EMPERATRIZ MORALES
            </h1>
            <p className="text-xl md:text-2xl text-space-gold font-medium">
              Exploración Espacial • Derecho Internacional • Tecnología Futurista
            </p>
          </div>

          {/* Professional Summary */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Profesional con sólida formación en <span className="text-space-aurora">Derecho</span>, 
              <span className="text-space-stellar"> Geopolítica</span> y 
              <span className="text-space-gold"> Tecnología</span>, con enfoque en la exploración espacial 
              y la cooperación interplanetaria. Comprometida con el desarrollo de soluciones innovadoras 
              que impulsen a la humanidad hacia el futuro espacial.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <MapPin className="w-5 h-5 text-space-gold" />
              <span>Colombia</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Mail className="w-5 h-5 text-space-gold" />
              <span className="text-sm">emperatrizmorales2718@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <a href="https://instagram.com/emperatriz1827" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-space-aurora hover:text-space-gold transition-colors" />
              </a>
              <a href="https://facebook.com/emperatrizmorales" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-space-stellar hover:text-space-gold transition-colors" />
              </a>
              <a href="https://twitter.com/Emperatriz1827" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 text-space-aurora hover:text-space-gold transition-colors" />
              </a>
            </div>
          </div>

          {/* Personal Slogan */}
          <div className="max-w-3xl mx-auto pt-8">
            <blockquote className="text-xl md:text-2xl font-orbitron italic text-space-gold border-l-4 border-space-aurora pl-6">
              "Soy una mujer reservada y digna en mis acciones, diplomática y leal. 
              Mujer de vanguardia futurista, enfocada en la exploración interplanetaria."
            </blockquote>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
