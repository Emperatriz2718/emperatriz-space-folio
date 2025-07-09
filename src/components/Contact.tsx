import { Mail, MapPin, Phone, Instagram, Facebook, Twitter, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const universities = [
    {
      name: "Universidad de Leiden",
      country: "Países Bajos",
      address: "Rapenburg 70, 2311 EZ Leiden",
      phone: "+31 71 527 2727",
      email: "info@leidenuniv.nl"
    },
    {
      name: "Universidad de Kuwait",
      country: "Kuwait",
      address: "P.O. Box 5969, Safat 13060",
      phone: "+965 2498 5555",
      email: "info@ku.edu.kw"
    },
    {
      name: "Universidad de Dubái",
      country: "EAU",
      address: "Academic City, Dubái",
      phone: "+971 4 207 2000",
      email: "info@ud.ac.ae"
    },
    {
      name: "Universidad Jorge Tadeo Lozano",
      country: "Colombia",
      address: "Carrera 4 No. 22-61, Bogotá",
      phone: "+57 1 242 7030",
      email: "info@utadeo.edu.co"
    }
  ];

  const hobbies = [
    {
      name: "Lectura",
      description: "Investigaciones aeroespaciales (NASA, agencias espaciales)",
      image: "/images/hobbies/lectura.png"
    },
    {
      name: "Música",
      description: "Jazz, clásica y ambiental",
      image: "/images/hobbies/musica.png"
    },
    {
      name: "Deporte y bienestar",
      description: "Yoga, meditación, caminatas",
      image: "/images/hobbies/deporteybienestar.png"
    },
    {
      name: "Viajes",
      description: "Culturas diversas y geografía planetaria",
      image: "/images/hobbies/viajes.png"
    },
    {
      name: "Estudios alternativos",
      description: "Visión remota, percepción extrasensorial y exopolítica",
      image: "/images/hobbies/estudiosalternativos.png"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-space-cosmic/50">
      <div className="container mx-auto">
        {/* Personal Info */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            Contacto
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conecta conmigo para colaboraciones en exploración espacial y proyectos futuristas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <Card className="bg-space-cosmic/70 border-space-stellar stellar-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-orbitron text-space-gold">
                Información de Contacto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-space-aurora" />
                <div>
                  <p className="text-white font-semibold">Ubicación</p>
                  <p className="text-gray-300">Colombia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-space-aurora mt-1" />
                <div>
                  <p className="text-white font-semibold">Correos electrónicos</p>
                  <p className="text-gray-300">emperatrizmorales2718@gmail.com</p>
                  <p className="text-gray-300">emperatriz1827@hotmail.com</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-white font-semibold mb-4">Redes Sociales</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/emperatriz1827" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-space-deep rounded-full hover:bg-space-aurora transition-colors stellar-glow"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://facebook.com/emperatrizmorales" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-space-deep rounded-full hover:bg-space-stellar transition-colors stellar-glow"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://twitter.com/Emperatriz1827" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-space-deep rounded-full hover:bg-space-aurora transition-colors stellar-glow"
                  >
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Profile */}
          <Card className="bg-space-cosmic/70 border-space-stellar stellar-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-orbitron text-space-gold">
                Perfil Personal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-space-aurora font-semibold">Fecha de nacimiento:</p>
                  <p className="text-gray-300">18 de noviembre de 1980</p>
                </div>
                <div>
                  <p className="text-space-aurora font-semibold">Lugar de nacimiento:</p>
                  <p className="text-gray-300">Pivijay, Magdalena, Colombia</p>
                </div>
                <div>
                  <p className="text-space-aurora font-semibold">Estado civil:</p>
                  <p className="text-gray-300">Casada</p>
                </div>
                <div>
                  <p className="text-space-aurora font-semibold">Hijos:</p>
                  <p className="text-gray-300">Uno</p>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-white font-semibold mb-2">Características</p>
                <p className="text-gray-300 leading-relaxed">
                  Mujer reservada, diplomática, leal y futurista. 
                  Líder comprometida con la evolución planetaria e interplanetaria.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hobbies */}
        <div className="mb-20">
          <h3 className="text-3xl font-orbitron font-bold text-space-aurora mb-8 text-center">
            Hobbies e Intereses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby) => (
              <Card key={hobby.name} className="bg-space-cosmic/50 border-space-stellar hover:border-space-aurora transition-all duration-300 stellar-glow">
                <CardContent className="p-6 flex flex-col items-center">
                  <img src={hobby.image} alt={hobby.name} className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-space-aurora" />
                  <p className="text-space-aurora font-semibold mb-1">{hobby.name}</p>
                  <p className="text-gray-300 leading-relaxed text-center">{hobby.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Universities */}
        <div>
          <h3 className="text-3xl font-orbitron font-bold text-space-aurora mb-8 text-center">
            Datos de Contacto de Universidades
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {universities.map((university, index) => (
              <Card key={index} className="bg-space-cosmic/60 border-space-stellar hover:border-space-aurora transition-all duration-300 stellar-glow">
                <CardHeader>
                  <CardTitle className="text-xl font-orbitron text-white">
                    {university.name}
                  </CardTitle>
                  <p className="text-space-gold font-semibold">{university.country}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-space-aurora mt-0.5" />
                    <p className="text-gray-300 text-sm">{university.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-space-aurora" />
                    <p className="text-gray-300 text-sm">{university.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-space-aurora" />
                    <p className="text-gray-300 text-sm">{university.email}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
