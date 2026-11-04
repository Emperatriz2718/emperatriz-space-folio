import { Brain, BarChart3, ShieldCheck, Radio } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StudiesExpertise = () => {
  const items = [
    {
      title: 'Artificial Intelligence',
      icon: Brain,
      color: 'text-space-aurora',
    },
    {
      title: 'Data Analysis',
      icon: BarChart3,
      color: 'text-space-stellar',
    },
    {
      title: 'Cybersecurity',
      icon: ShieldCheck,
      color: 'text-space-gold',
    },
    {
      title: 'Future Neutrino Communication',
      icon: Radio,
      color: 'text-space-aurora',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            Studies &amp; Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete studies at the core of a new reality powered by Neutrino AI and Nanotechnology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <Card
              key={item.title}
              className="bg-space-cosmic/50 border-space-stellar hover:border-space-aurora transition-all duration-300 stellar-glow hover:scale-105"
            >
              <CardHeader className="pb-4 flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-space-deep rounded-full stellar-glow">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <CardTitle className="text-lg font-orbitron text-white">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-300">
                  Complete studies
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudiesExpertise;
