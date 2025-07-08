
import { Rocket, Moon, Globe, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "AIGLE-HAWK Alliance Global Interplanetaria",
      description: "Exploración interplanetaria y cooperación global",
      icon: Rocket,
      color: "from-space-aurora to-space-stellar",
      details: "Proyecto integral de exploración espacial que busca establecer cooperación internacional para misiones interplanetarias futuras."
    },
    {
      title: "Base Lunar Cráter Shackleton",
      description: "Instalación autosostenible en el polo sur lunar",
      icon: Moon,
      color: "from-space-stellar to-space-nebula",
      details: "Diseño y planificación de una base lunar permanente en el cráter Shackleton, aprovechando los recursos de hielo de agua."
    },
    {
      title: "Colonización de Marte",
      description: "Planificación jurídica y tecnológica para asentamientos humanos",
      icon: Globe,
      color: "from-space-nebula to-space-gold",
      details: "Marco legal y tecnológico integral para establecer los primeros asentamientos humanos permanentes en Marte."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Iniciativas visionarias que definen el futuro espacial de la humanidad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-space-cosmic/70 border-space-stellar hover:border-space-aurora transition-all duration-500 stellar-glow hover:scale-105 group overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-4 bg-gradient-to-br from-space-deep to-space-cosmic rounded-full group-hover:animate-glow">
                    <project.icon className="w-10 h-10 text-space-gold" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-orbitron text-white group-hover:text-space-gold transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-space-aurora font-semibold text-lg">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  {project.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Objectives Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-orbitron font-bold text-space-aurora mb-12 text-center">
            Objetivos Profesionales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-space-aurora to-space-stellar rounded-full flex items-center justify-center mx-auto stellar-glow">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-orbitron text-space-gold">Innovación</h4>
              <p className="text-gray-300">Crear soluciones innovadoras en escenarios complejos</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-space-stellar to-space-nebula rounded-full flex items-center justify-center mx-auto stellar-glow">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-orbitron text-space-gold">Exploración</h4>
              <p className="text-gray-300">Contribuir activamente a la colonización y exploración del espacio</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-space-nebula to-space-gold rounded-full flex items-center justify-center mx-auto stellar-glow">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-orbitron text-space-gold">Cooperación</h4>
              <p className="text-gray-300">Fomentar la cooperación internacional frente a desafíos planetarios</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
