
import { Rocket, Scale, Globe2, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Investigadora y gestora",
      organization: "Proyecto AIGLE-HAWK Alliance Global Interplanetaria",
      icon: Rocket,
      color: "text-space-aurora",
      description: "Liderazgo en proyectos de exploración interplanetaria y cooperación global"
    },
    {
      title: "Coordinadora de proyectos espaciales",
      organization: "Base Lunar Cráter Shackleton y Colonización de Marte",
      icon: Globe2,
      color: "text-space-stellar",
      description: "Planificación y coordinación de instalaciones espaciales autosostenibles"
    },
    {
      title: "Apoyo jurídico",
      organization: "Unidad de Justicia y Paz, Colombia (2014)",
      icon: Scale,
      color: "text-space-gold",
      description: "Apoyo jurídico en procesos de reintegración y justicia transicional"
    },
    {
      title: "Asesoría legal",
      organization: "Proceso de Paz con Autodefensas",
      icon: Users,
      color: "text-space-aurora",
      description: "Asesoría legal en justicia transicional y procesos de reconciliación"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-space-cosmic/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            Experiencia Profesional
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trayectoria diversa en exploración espacial, derecho internacional y justicia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index} 
              className="bg-space-cosmic/60 border-space-stellar hover:border-space-aurora transition-all duration-500 stellar-glow hover:scale-105 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-space-deep rounded-full group-hover:animate-glow">
                    <experience.icon className={`w-8 h-8 ${experience.color}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-orbitron text-white mb-2 group-hover:text-space-gold transition-colors">
                      {experience.title}
                    </CardTitle>
                    <p className="text-space-aurora font-semibold text-lg">
                      {experience.organization}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
