
import { Rocket, Moon, Globe, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "AIGLE-HAWK Alliance Global Interplanetary",
      description: "Interplanetary exploration and global cooperation",
      icon: Rocket,
      color: "from-space-aurora to-space-stellar",
      details: "Interplanetary exploration and global cooperation"
    },
    {
      title: "Shackleton Lunar Base Crater",
      description: "Self-sustainable facility at the lunar south pole",
      icon: Moon,
      color: "from-space-stellar to-space-nebula",
      details: "Permanent lunar base design in Shackleton Crater, using water ice resources, self-sustainable facility at the lunar south pole"
    },
    {
      title: "Mars Colonization",
      description: "Legal and technological planning for human settlements",
      icon: Globe,
      color: "from-space-nebula to-space-gold",
      details: "Integral legal and technological framework to establish the first permanent human settlements on Mars"
    },
    {
      title: "Neutrino Communication System Earth ⇌ Moon ⇌ Mars Link",
      description: "The next generation of interplanetary links",
      icon: Zap,
      color: "from-space-aurora to-space-gold",
      details: "The Neutrino Communication System represents the next generation of interplanetary links. Unlike radio waves, neutrinos traverse planetary matter without attenuation, enabling direct, line-of-sight independent communication, resistant to space weather, dust, and eclipses."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visionary initiatives that define the spatial future of humanity
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
            Professional Objectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-space-aurora to-space-stellar rounded-full flex items-center justify-center mx-auto stellar-glow">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-orbitron text-space-gold">Innovation</h4>
              <p className="text-gray-300">Create innovative solutions in complex scenarios</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-space-stellar to-space-nebula rounded-full flex items-center justify-center mx-auto stellar-glow">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-orbitron text-space-gold">Exploration</h4>
              <p className="text-gray-300">Actively contribute to space colonization and exploration</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-space-nebula to-space-gold rounded-full flex items-center justify-center mx-auto stellar-glow">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-orbitron text-space-gold">Cooperation</h4>
              <p className="text-gray-300">Foster international cooperation in addressing planetary challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
