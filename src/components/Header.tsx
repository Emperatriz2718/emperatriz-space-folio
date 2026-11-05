import { Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

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
          <div className="space-y-3">
            <h1 className="text-5xl md:text-7xl font-orbitron font-black text-white animate-float tracking-wide">
              EMPERATRIZ MORALES
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium">
              Global Private Company
            </p>
            <p className="text-lg md:text-xl text-space-gold font-medium">
              Futuristic Technologies • Aerospace / Renewable Energies
            </p>
          </div>

          {/* Role */}
          <div className="max-w-4xl mx-auto">
            <p className="inline-block text-lg md:text-xl text-white font-orbitron border border-space-stellar rounded-full px-6 py-2 bg-space-cosmic/50 stellar-glow">
              Founder &amp; Legal Representative
            </p>
          </div>

          {/* Official Bio */}
          <div className="max-w-4xl mx-auto space-y-5">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Complete studies in <span className="text-space-aurora font-medium">Artificial Intelligence</span>,{' '}
              <span className="text-space-stellar font-medium">Data Analysis</span>,{' '}
              <span className="text-space-gold font-medium">Cybersecurity</span> and{' '}
              <span className="text-space-aurora font-medium">Future Neutrino Communication</span>.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Specialized in <span className="text-space-gold">Neutrino Communication of the Future</span>,{' '}
              <span className="text-space-stellar">Futuristic Renewable Energies</span> and{' '}
              <span className="text-space-aurora">Aerospace</span>.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Our vision: <span className="text-space-gold font-medium">The Universe belongs to everyone</span>. Our base is the Lunar Base and Mars Colonization.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Our exclusive focus is <span className="text-space-aurora">Exopolitics</span>,{' '}
              <span className="text-space-stellar">International Space Law</span> and{' '}
              <span className="text-space-gold">Asteroid Mining Laws</span> — a new reality powered by Neutrino AI and Nanotechnology.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-white">
              <MapPin className="w-5 h-5 text-space-gold" />
              <span>Colombia</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white">
              <Mail className="w-5 h-5 text-space-gold" />
              <span className="text-sm">emperatrizmorales2718@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <a href="https://www.instagram.com/emperatriz_1827/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @emperatriz_1827">
                <Instagram className="w-6 h-6 text-space-aurora hover:text-space-gold transition-colors" />
              </a>
              <a href="https://www.facebook.com/share/19ckpqLRcz/" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center" aria-label="Facebook Cuenta Oficial Verificada - Emperatriz Morales">
                <Facebook className="w-6 h-6 text-space-stellar hover:text-space-gold transition-colors" />
                <span className="absolute -top-1 -right-2 w-3.5 h-3.5 rounded-full bg-[#1877F2] flex items-center justify-center" title="Cuenta Oficial Verificada">
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
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
