export const CLOSING = 'HUMANO DECIDE. IA PROPONE. PAZ Y ARMONÍA. / HUMAN DECIDES. AI PROPOSES. PEACE AND HARMONY.';

export const REPLIES = {
  es: {
    greeting: 'Hola, soy Agente Emperatriz Morales. Pregúntame sobre los 8 puntos GEOGLOBAL.',
    lunar: 'BASE LUNAR SIN FRONTERAS NI PAÍSES - 2030. Escuela de unidad. Armonía y paz.',
    mars: 'MARTE - 2036. APRENDAMOS A VIVIR JUNTOS. Sin frontera, sin país, sin conquista. Una sola humanidad. Una sola casa.',
    neutrino: 'NEUTRINO - 2028. Comunicación del Futuro. No se corta, no se censura, no se silencia.',
  },
  en: {
    greeting: 'Hello, I am Agent Emperatriz Morales. Ask me about the 8 GEOGLOBAL points.',
    lunar: 'LUNAR BASE WITHOUT BORDERS OR COUNTRIES - 2030. School of unity. Harmony and peace.',
    mars: 'MARS - 2036. LET US LEARN TO LIVE TOGETHER. Without border, without country, without conquest. One single humanity. One single home.',
    neutrino: 'NEUTRINO - 2028. Communication of the Future. It cannot be cut, cannot be censored, cannot be silenced.',
  },
};

const normalize = (text) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export function detectLanguage(messages) {
  for (const message of [...messages].reverse()) {
    if (message.role !== 'user') continue;
    const text = normalize(message.content);
    const es = text.match(/\b(hola|buenos|dias|buenas|gracias|que|cual|cuando|como|sobre|luna|marte|colonizacion|fechas|espanol|dime|quiero|la|el|los|las|una|perforacion)\b/g)?.length ?? 0;
    const en = text.match(/\b(hello|hi|good|morning|thanks|what|which|when|how|about|moon|mars|colonization|dates|english|tell|the|is|are|drilling)\b/g)?.length ?? 0;
    if (es !== en) return es > en ? 'es' : 'en';
  }
  return 'en';
}

export function officialReply(text, language) {
  const normalized = normalize(text);
  const replies = REPLIES[language];
  const allDates = /\b(fechas|dates|cronograma|timeline|milestones)\b/.test(normalized);
  const parts = [];
  if (allDates || /\b(neutrinos?|2028)\b/.test(normalized)) parts.push(replies.neutrino);
  if (allDates || /\b(luna|lunar|moon|shackleton|2030)\b/.test(normalized)) parts.push(replies.lunar);
  if (allDates || /\b(marte|mars|colonizacion|colonization|2036)\b/.test(normalized)) parts.push(replies.mars);
  if (parts.length) return parts.join('\n\n');
  if (/^(hola|hello|hi|buenos dias|buenas tardes|buenas noches|good morning|good afternoon|good evening)[!.,\s]*$/.test(normalized.trim())) return replies.greeting;
  return null;
}

export function finishReply(text) {
  return `${text.trim()}\n\n${CLOSING}`;
}