import { Globe, Moon, Rocket, Radio, Snowflake, Users, Home, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const NODES = [
  {
    node: 'NODE 1: EARTH',
    subtitle: 'Home Planet | Ground Station',
    icon: Globe,
    color: 'from-space-aurora to-space-stellar',
    facility: 'PROTON ACCELERATOR / NEUTRINO SOURCE — CERN-Style Facility',
    points: [
      'Protons accelerated and collided with a target produce pions that decay into muons and muon neutrinos.',
      'Neutrino Beam of ~1 GeV traveling at near-light speed.',
      'Neutrino beam traverses Earth interior unaffected by rock/matter — its extremely low cross-section (~10^-38 cm²) means neutrinos do not interact with rock.',
    ],
  },
  {
    node: 'NODE 2: MOON',
    subtitle: 'Lunar South Pole | Shackleton Outpost',
    icon: Moon,
    color: 'from-space-stellar to-space-nebula',
    facility: 'ICECUBE-LIKE DETECTOR — Buried Array in Polar Ice',
    points: [
      'Beam passes through Lunar Regolith & Ice, detected by a buried array.',
      'Shackleton crater holds permanent water-ice deposits in shadow (Lunar Ice Deposits) — a strategic location.',
      'Cherenkov detection: a ~1 GeV neutrino rarely interacts with ice, generating a muon that emits blue Cherenkov light, captured by buried optical modules — technology proven by IceCube in Antarctica.',
      'Lunar Relay Transmitter regenerates and relays the Neutrino Beam to Mars.',
    ],
  },
  {
    node: 'NODE 3: MARS',
    subtitle: 'Mars Colony | Valles Marineris Colony',
    icon: Rocket,
    color: 'from-space-nebula to-space-gold',
    facility: 'NEUTRINO DETECTOR ARRAY — Buried in Subsurface Mars',
    points: [
      'Valles Marineris selected for natural radiation shielding and access to subsurface ice.',
      'Underground detector seeking subsurface ice, using Cherenkov detection.',
      'Being buried, it is immune to global dust storms that block optical and radio communications.',
    ],
  },
];

const LEGEND = [
  { icon: Zap, label: 'Neutrino Beam', text: 'Penetrates planetary matter, minimal interaction, near-instant transmission.' },
  { icon: Snowflake, label: 'IceCube-like Detector', text: 'Buried cryogenic detector for neutrino reception, buried in ice.' },
  { icon: Users, label: 'Astronaut Crew', text: 'On-site operations & maintenance.' },
  { icon: Home, label: 'Habitat / Base', text: 'Life support, communications relay.' },
];

const NeutrinoCommunication = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-space-aurora/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-space-stellar/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section heading */}
        <div className="text-center mb-10">
          <p className="inline-block text-sm md:text-base font-orbitron text-space-gold border border-space-gold/40 rounded-full px-6 py-2 bg-space-cosmic/50 stellar-glow mb-8">
            OWN ARTICLE
          </p>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            NEUTRINO COMMUNICATION SYSTEM
          </h2>
          <p className="text-2xl md:text-3xl font-orbitron text-white mb-4">
            Earth <span className="text-space-gold">⇌</span> Moon <span className="text-space-gold">⇌</span> Mars Link
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto">
            NEUTRINO COMMUNICATION SYSTEM — Earth ⇌ Moon ⇌ Mars | Earth-Moon-Mars Link | Subsurface Neutrino Communications for Deep Space Networks
          </p>
        </div>

        {/* Executive summary */}
        <Card className="bg-space-cosmic/60 border-space-stellar stellar-glow max-w-5xl mx-auto mb-16">
          <CardContent className="pt-6">
            <h3 className="text-xl font-orbitron text-space-aurora mb-4">1. Executive Summary</h3>
            <p className="text-lg text-white leading-relaxed">
              The Neutrino Communication System represents the next generation of interplanetary links. Unlike radio waves,{' '}
              <span className="text-space-gold font-medium">neutrinos traverse planetary matter without attenuation</span>, enabling
              direct, line-of-sight independent communication, resistant to space weather, dust, and eclipses.
              This plate proposes a three-node architecture: <span className="text-space-aurora font-medium">Earth — Moon — Mars</span>.
            </p>
          </CardContent>
        </Card>

        {/* Node cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {NODES.map((item) => (
            <Card
              key={item.node}
              className="bg-space-cosmic/70 border-space-stellar hover:border-space-aurora transition-all duration-500 stellar-glow hover:scale-105 group overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`} />
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-4 bg-gradient-to-br from-space-deep to-space-cosmic rounded-full group-hover:animate-glow">
                    <item.icon className="w-9 h-9 text-space-gold" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-orbitron text-white group-hover:text-space-gold transition-colors">
                      {item.node}
                    </CardTitle>
                    <p className="text-space-aurora font-semibold">{item.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm font-orbitron text-space-gold border-l-2 border-space-gold/50 pl-3">
                  {item.facility}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="text-gray-300 leading-relaxed flex gap-2">
                      <Radio className="w-4 h-4 text-space-aurora shrink-0 mt-1" />
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legend */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-2xl font-orbitron font-bold text-space-aurora mb-8 text-center">3. Plate Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEGEND.map((item) => (
              <div
                key={item.label}
                className="flex items-start space-x-4 bg-space-cosmic/50 border border-space-stellar rounded-lg p-5 hover:border-space-aurora transition-colors"
              >
                <div className="p-3 bg-space-deep rounded-full stellar-glow shrink-0">
                  <item.icon className="w-5 h-5 text-space-gold" />
                </div>
                <div>
                  <p className="font-orbitron text-white font-medium">{item.label}</p>
                  <p className="text-sm text-gray-300 mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Author */}
        <div className="text-center">
          <p className="text-sm font-orbitron text-gray-400">
            Author: <span className="text-space-gold">@Emperatriz1827</span>
          </p>
          <p className="text-xs text-gray-500 mt-2 max-w-2xl mx-auto">
            Follow the original article thread: NEUTRINO COMMUNICATION SYSTEM — EARTH-MOON ⇌ MARS LINK
          </p>
        </div>
      </div>
    </section>
  );
};

export default NeutrinoCommunication;
