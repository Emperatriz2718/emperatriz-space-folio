
import { GraduationCap, Globe, Brain, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      degree: "Law",
      institution: "Kuwait University",
      note: "Homologated in Colombia by Universidad Jorge Tadeo Lozano",
      icon: Shield,
      color: "text-space-aurora"
    },
    {
      degree: "Specialization in International Geopolitics",
      institution: "University of Dubai",
      icon: Globe,
      color: "text-space-stellar"
    },
    {
      degree: "Cyber Criminal Law",
      institution: "Leiden University (agreement with Kuwait University)",
      icon: Brain,
      color: "text-space-gold"
    },
    {
      degree: "International Criminal Law: Armed Conflict",
      institution: "Leiden University",
      icon: Shield,
      color: "text-space-aurora"
    }
  ];

  const additionalTraining = [
    {
      program: "Diploma in Artificial Intelligence",
      institution: "Talento Tech Caribe / Universidad Libre de Barranquilla",
      modules: ["Explorer Module Completed", "Integrator Module Completed", "Innovator Module Completed"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            Academic Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized training at leading international universities
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
            Additional Training
          </h3>
          <Card className="bg-gradient-to-br from-space-cosmic to-space-nebula border-space-aurora stellar-glow">
            <CardHeader>
              <div className="inline-flex self-end items-center gap-2 bg-green-500/15 border border-green-500/60 text-green-400 font-orbitron text-xs font-bold tracking-wide rounded-full px-4 py-1.5 mb-3">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                DIPLOMA COMPLETED
              </div>
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
