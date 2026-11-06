
import { Rocket, Scale, Globe2, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Researcher and Manager",
      organization: "AIGLE-HAWK Alliance Global Interplanetary Project",
      icon: Rocket,
      color: "text-space-aurora",
      description: "Leadership in interplanetary exploration projects and global cooperation."
    },
    {
      title: "Space Projects Coordinator",
      organization: "Shackleton Lunar Base Crater and Mars Colonization",
      icon: Globe2,
      color: "text-space-stellar",
      description: "Planning and coordination of self-sustainable space facilities."
    },
    {
      title: "Legal Support",
      organization: "Justice and Peace Unit, Colombia (2014)",
      icon: Scale,
      color: "text-space-gold",
      description: "Legal support in reintegration processes and transitional justice."
    },
    {
      title: "Legal Advisor",
      organization: "Peace Process with Self-Defense Groups",
      icon: Users,
      color: "text-space-aurora",
      description: "Legal advice in transitional justice and reconciliation processes."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-space-cosmic/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Diverse trajectory in space exploration, international law and justice
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
