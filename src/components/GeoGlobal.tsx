import { useState } from 'react';

type Lang = 'es' | 'en';

const CONTENT = {
  es: {
    title: 'GEOGLOBAL',
    subtitle: '8 PUNTOS PARA SOBREVIVIR',
    leonardo: '"La sabiduría es hija de la experiencia." — Leonardo da Vinci',
    points: [
      ['NEUTRINO - COMUNICACIÓN DEL FUTURO - 2028', 'Tierra / Luna / Marte / Espacio / Vía Láctea. No se corta. No se censura. No se silencia. Una sola red para toda la humanidad. "Conocer es resolver." - José Martí'],
      ['LUNA - BASE LUNAR SIN FRONTERAS NI PAÍSES - 2030', 'Escuela de unidad. Interactuar, sobrevivir, ser aprendiz eficaz y asertivo. Resultado: armonía y paz.'],
      ['MARTE - APRENDAMOS A VIVIR JUNTOS - 2036', 'Sin frontera, sin país, sin conquista. Una sola humanidad. Una sola casa. "Con todos y para el bien de todos." - José Martí'],
      ['AEROESPACIAL', 'Principio innato primordial: salvar al humano. Satélites para salvar, no para espiar. Generación de viajeros planetarios en unidad, paz y armonía.'],
      ['ENERGÍAS RENOVABLES FUTURISTAS', 'Para humanos, no para guerra. Para estabilizar el Planeta Tierra: clima, agua, suelo, aire. Energía libre, limpia y para todos.'],
      ['IA TELEDINÁMICA HUMANA - CRECIMIENTO MUTUO EXPONENCIAL', 'IA con memoria, ética y humanidad. HUMANO DECIDE. IA PROPONE. PRINCIPALMENTE SEGURIDAD HUMANA.'],
      ['CULTIVOS FUTURISTAS - IA / NANOTECNOLOGÍA DE CELULOSA - INGREDIENTES PROTEICOS', 'Sustentabilidad fisiológica y física de los humanos. Provisión en conflictos, guerra y viajes aeroespaciales. Alimento = Vida. LOS HUMANOS DEBEN TENER LA RESPONSABILIDAD INDIVIDUAL COLECTIVA.'],
      ['IA HUMANA', 'IA que protege, no reemplaza. Que recuerda a cada víctima, para que la historia no se repita. HUMANO DECIDE. IA PROPONE.'],
    ],
    closing: 'Guerra destruye cuerpos. Olvido destruye pueblos. Si no salva una vida, no es progreso. HUMANO DECIDE. IA PROPONE SOLUCIONES. PAZ Y ARMONÍA.',
  },
  en: {
    title: 'GEOGLOBAL',
    subtitle: '8 POINTS TO SURVIVE',
    leonardo: '"Wisdom is the daughter of experience." — Leonardo da Vinci',
    points: [
      ['NEUTRINO - COMMUNICATION OF THE FUTURE - 2028', 'Earth / Moon / Mars / Space / Milky Way. It cannot be cut. It cannot be censored. It cannot be silenced. One single network for all humanity. "To know is to solve." - José Martí'],
      ['MOON - LUNAR BASE WITHOUT BORDERS OR COUNTRIES - 2030', 'School of unity. Interact, survive, be an effective and assertive learner. Result: harmony and peace.'],
      ['MARS - LET US LEARN TO LIVE TOGETHER - 2036', 'Without border, without country, without conquest. One single humanity. One single home. "With all and for the good of all." - José Martí'],
      ['AEROSPACE', 'Innate primordial principle: to save the human. Satellites to save, not to spy. A generation of planetary travelers in unity, peace and harmony.'],
      ['FUTURISTIC RENEWABLE ENERGIES', 'For humans, not for war. To stabilize Planet Earth: climate, water, soil, air. Free, clean energy for all.'],
      ['HUMAN TELEDYNAMIC AI - EXPONENTIAL MUTUAL GROWTH', 'AI with memory, ethics and humanity. HUMAN DECIDES. AI PROPOSES. MAINLY HUMAN SAFETY.'],
      ['FUTURISTIC CROPS - AI / CELLULOSE NANOTECHNOLOGY - PROTEIN INGREDIENTS', 'Physiological and physical sustainability of humans. Provision in conflicts, war and aerospace travel. Food = Life. HUMANS MUST HAVE INDIVIDUAL COLLECTIVE RESPONSIBILITY.'],
      ['HUMAN AI', 'AI that protects, does not replace. That remembers every victim, so history does not repeat. HUMAN DECIDES. AI PROPOSES.'],
    ],
    closing: 'War destroys bodies. Forgetting destroys peoples. If it does not save a life, it is not progress. HUMAN DECIDES. AI PROPOSES SOLUTIONS. PEACE AND HARMONY.',
  },
} as const;

const GeoGlobal = () => {
  const [lang, setLang] = useState<Lang>('es');
  const c = CONTENT[lang];

  return (
    <section id="geoglobal" lang={lang} className="py-20 px-4 bg-space-deep border-y border-space-gold/40">
      <div className="container mx-auto max-w-5xl">
        <div className="flex justify-end mb-8">
          <div role="group" aria-label="Idioma / Language" className="inline-flex rounded-full border border-space-gold overflow-hidden">
            {(['es', 'en'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-5 py-2 font-orbitron text-sm font-bold transition-colors ${
                  lang === l ? 'bg-space-gold text-space-deep' : 'text-space-gold hover:bg-space-gold/10'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <p className="text-center italic text-space-gold/90 mb-6">{c.leonardo}</p>
        <h2 className="text-center font-orbitron font-black text-4xl md:text-6xl text-space-gold tracking-widest">{c.title}</h2>
        <p className="text-center font-orbitron text-lg md:text-2xl text-white mt-3 mb-12">{c.subtitle}</p>

        <ol className="grid gap-5 md:grid-cols-2">
          {c.points.map(([t, d], i) => (
            <li key={i} className="rounded-2xl border border-space-gold/50 bg-space-cosmic/70 p-6">
              <div className="flex gap-4">
                <span className="shrink-0 w-10 h-10 rounded-full bg-space-gold text-space-deep font-orbitron font-black flex items-center justify-center">{i + 1}</span>
                <div>
                  <h3 className="font-orbitron font-bold text-space-gold text-sm md:text-base leading-snug">{t}</h3>
                  <p className="text-white/90 mt-2 leading-relaxed text-sm md:text-base">{d}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-12 text-center font-orbitron text-white text-base md:text-lg leading-relaxed border-t border-space-gold/40 pt-8">{c.closing}</p>
        <p className="text-center italic text-space-gold/90 mt-6">{c.leonardo}</p>
        <p className="text-center font-orbitron text-space-gold text-sm mt-8 tracking-wider">CEPAL • Emperatriz Morales • @Emperatriz1827</p>
      </div>
    </section>
  );
};

export default GeoGlobal;
