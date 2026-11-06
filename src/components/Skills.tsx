
import { Languages, Code, Scale, Globe, Brain, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Languages,
      color: "text-space-aurora",
      skills: ["Arabic (native)", "English", "Italian", "Spanish", "Sanskrit"]
    },
    {
      title: "Technology and Law",
      icon: Code,
      color: "text-space-stellar",
      skills: [
        "Computer Law",
        "Artificial Intelligence",
        "Cybersecurity and digital justice",
        "Technologies applied to space exploration"
      ]
    },
    {
      title: "Law and Geopolitics",
      icon: Scale,
      color: "text-space-gold",
      skills: [
        "International and Criminal Law",
        "Human Rights",
        "Intellectual Property",
        "Geopolitics and international relations",
        "Global security and space sovereignty"
      ]
    }
  ];

  const researchAreas = [
    {
      title: "Space Exploration",
      description: "Lunar and Martian habitats",
      icon: Globe,
      color: "text-space-aurora"
    },
    {
      title: "Artificial Intelligence",
      description: "Ethics and applications in law and security",
      icon: Brain,
      color: "text-space-stellar"
    },
    {
      title: "Geopolitics",
      description: "Space governance and global relations",
      icon: Shield,
      color: "text-space-gold"
    },
    {
      title: "Exopolitics",
      description: "Advanced consciousness and applied spirituality",
      icon: Brain,
      color: "text-space-aurora"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-space-cosmic/30 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Multidisciplinary expertise in technology, law and space exploration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-space-cosmic/60 border-space-stellar hover:border-space-aurora transition-all duration-500 stellar-glow hover:scale-105 group h-full"
            >
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-space-deep rounded-full group-hover:animate-glow">
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-orbitron text-white group-hover:text-space-gold transition-colors">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-space-aurora rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Areas */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-orbitron font-bold text-space-aurora mb-8">
            Research Areas
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-space-cosmic to-space-nebula border-space-stellar hover:border-space-aurora transition-all duration-500 stellar-glow hover:scale-105 group text-center"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-space-deep rounded-full group-hover:animate-glow">
                    <area.icon className={`w-10 h-10 ${area.color}`} />
                  </div>
                </div>
                <CardTitle className="text-xl font-orbitron text-white group-hover:text-space-gold transition-colors">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
