
import { GraduationCap, Globe, Brain, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      degree: "Derecho",
      institution: "Universidad de Kuwait",
      note: "Homologado en Colombia por Universidad Jorge Tadeo Lozano",
      icon: Shield,
      color: "text-space-aurora"
    },
    {
      degree: "Especialización en Geopolítica Internacional",
      institution: "Universidad de Dubái",
      icon: Globe,
      color: "text-space-stellar"
    },
    {
      degree: "Informática Penal",
      institution: "Universidad de Leiden (convenio con Universidad de Kuwait)",
      icon: Brain,
      color: "text-space-gold"
    },
    {
      degree: "Derecho Penal Internacional: Conflicto Armado",
      institution: "Universidad de Leiden",
      icon: Shield,
      color: "text-space-aurora"
    }
  ];

  const additionalTraining = [
    {
      program: "Diplomado en Inteligencia Artificial",
      institution: "Talento Tech Caribe (convenio Universidad Libre de Barranquilla)",
      modules: ["Módulo Explorador (En curso)", "Módulo Integrador (En curso)", "Módulo Innovador (En curso)"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            Educación Académica
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Formación especializada en las principales universidades internacionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {education.map((item, index) => (
            <Card key={index} className="bg-space-cosmic/50 border-space-stellar hover:border-space-aurora transition-all duration-300 stellar-glow hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                  <CardTitle className="text-xl font-orbitron text-white">
                    {item.degree}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-space-gold font-medium mb-2">{item.institution}</p>
                {item.note && (
                  <p className="text-sm text-gray-400 italic">{item.note}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Training */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-orbitron font-bold text-space-aurora mb-8 text-center">
            Formación Adicional
          </h3>
          <Card className="bg-gradient-to-br from-space-cosmic to-space-nebula border-space-aurora stellar-glow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Brain className="w-10 h-10 text-space-gold" />
                <div>
                  <CardTitle className="text-2xl font-orbitron text-white">
                    {additionalTraining[0].program}
                  </CardTitle>
                  <p className="text-space-aurora font-medium">
                    {additionalTraining[0].institution}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {additionalTraining[0].modules.map((module, index) => (
                  <div key={index} className="bg-space-deep/50 p-4 rounded-lg border border-space-stellar">
                    <p className="text-white font-medium">{module}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
