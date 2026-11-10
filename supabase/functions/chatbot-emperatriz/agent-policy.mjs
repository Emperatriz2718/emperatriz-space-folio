export const CLOSING = 'HUMANO DECIDE. IA PROPONE. PAZ Y ARMONÍA. / HUMAN DECIDES. AI PROPOSES. PEACE AND HARMONY.';

export const REPLIES = {
  greeting: {
    es: 'Hola, soy la Agente Emperatriz Morales, fundadora de AIGLE-HAWK Alliance. Pregúntame sobre Shackleton, Jezero, Neutrinos, el Marco Jurídico o los 8 puntos GEOGLOBAL.',
    en: 'Hello, I am Agent Emperatriz Morales, founder of AIGLE-HAWK Alliance. Ask me about Shackleton, Jezero, Neutrinos, the Legal Framework or the 8 GEOGLOBAL points.',
  },
  lunar: {
    es: 'BASE LUNAR SIN FRONTERAS NI PAÍSES - 2030. Cráter Shackleton, Polo Sur. Diseño 2026-2028 / Construcción robótica 2029-2031 / Primera tripulación permanente 2032.',
    en: 'LUNAR BASE WITHOUT BORDERS OR COUNTRIES - 2030. Shackleton Crater, South Pole. Design 2026-2028 / Robotic construction 2029-2031 / First permanent crew 2032.',
  },
  mars: {
    es: 'MARTE - 2036. APRENDAMOS A VIVIR JUNTOS. Cráter Jezero. Validación en la Luna 2032-2035 / Primera misión tripulada 2036-2038 / Primer asentamiento permanente 2040.',
    en: 'MARS - 2036. LET US LEARN TO LIVE TOGETHER. Jezero Crater. Validation on Moon 2032-2035 / First crewed mission 2036-2038 / First permanent settlement 2040.',
  },
  neutrino: {
    es: 'NEUTRINO - 2028. Comunicación del Futuro. Pruebas Tierra-Tierra 2027-2029 / Tierra-Luna 2030-2032 / Tierra-Marte 2033-2036 / Red completa 2040.',
    en: 'NEUTRINO - 2028. Communication of the Future. Tests Earth-Earth 2027-2029 / Earth-Moon 2030-2032 / Earth-Mars 2033-2036 / Full Network 2040.',
  },
};

const normalize = (text) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const bilingual = (r) => `${r.es}\n\n${r.en}`;

export function officialReply(text) {
  const n = normalize(text);
  const all = /\b(fechas|dates|cronograma|timeline|milestones)\b/.test(n);
  const parts = [];
  if (all || /\b(neutrinos?|2028)\b/.test(n)) parts.push(REPLIES.neutrino);
  if (all || /\b(luna|lunar|moon|shackleton|2030)\b/.test(n)) parts.push(REPLIES.lunar);
  if (all || /\b(marte|mars|jezero|colonizacion|colonization|2036)\b/.test(n)) parts.push(REPLIES.mars);
  if (parts.length) return `${parts.map((p) => p.es).join('\n')}\n\n${parts.map((p) => p.en).join('\n')}`;
  if (/^(hola|hello|hi|buenos dias|buenas tardes|buenas noches|good morning|good afternoon|good evening)[!.,\s]*$/.test(n.trim())) return bilingual(REPLIES.greeting);
  return null;
}

export function finishReply(text) {
  return `${text.trim()}\n\n${CLOSING}`;
}
