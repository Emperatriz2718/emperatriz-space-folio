import { test } from 'node:test';
import assert from 'node:assert/strict';
import { detectLanguage, officialReply, finishReply } from '../supabase/functions/chatbot-emperatriz/agent-policy.mjs';

const user = (content) => ({ role: 'user', content });
test('Hello and Hi select English; Hola and Buenos días select Spanish', () => {
  for (const text of ['Hello', 'Hi']) assert.equal(detectLanguage([user(text)]), 'en');
  for (const text of ['Hola', 'Buenos días']) assert.equal(detectLanguage([user(text)]), 'es');
});
test('latest user language overrides earlier turns', () => {
  assert.equal(detectLanguage([user('Hello'), user('¿Cuándo es la base lunar?')]), 'es');
  assert.equal(detectLanguage([user('Hola'), user('When is the lunar base?')]), 'en');
});
test('ambiguous Neutrino retains the user language', () => assert.equal(detectLanguage([user('Hola'), user('Neutrino')]), 'es'));
test('Spanish lunar base exact response includes 2030', () => assert.equal(officialReply('Base Lunar', 'es'), 'BASE LUNAR SIN FRONTERAS NI PAÍSES - 2030. Escuela de unidad. Armonía y paz.'));
test('English lunar base exact response includes 2030', () => assert.equal(officialReply('Lunar Base', 'en'), 'LUNAR BASE WITHOUT BORDERS OR COUNTRIES - 2030. School of unity. Harmony and peace.'));
test('Spanish Mars and colonization exact response includes 2036', () => { for (const text of ['Marte', 'Colonización']) assert.equal(officialReply(text, 'es'), 'MARTE - 2036. APRENDAMOS A VIVIR JUNTOS. Sin frontera, sin país, sin conquista. Una sola humanidad. Una sola casa.'); });
test('English Mars and colonization exact response includes 2036', () => { for (const text of ['Mars', 'Colonization']) assert.equal(officialReply(text, 'en'), 'MARS - 2036. LET US LEARN TO LIVE TOGETHER. Without border, without country, without conquest. One single humanity. One single home.'); });
test('Spanish neutrino exact response includes 2028', () => assert.equal(officialReply('Neutrino', 'es'), 'NEUTRINO - 2028. Comunicación del Futuro. No se corta, no se censura, no se silencia.'));
test('English neutrino exact response includes 2028', () => assert.equal(officialReply('Neutrino', 'en'), 'NEUTRINO - 2028. Communication of the Future. It cannot be cut, cannot be censored, cannot be silenced.'));
test('greetings identify the agent in the user language', () => {
  assert.equal(officialReply('Hola', 'es'), 'Hola, soy Agente Emperatriz Morales. Pregúntame sobre los 8 puntos GEOGLOBAL.');
  assert.equal(officialReply('Hello', 'en'), 'Hello, I am Agent Emperatriz Morales. Ask me about the 8 GEOGLOBAL points.');
});
test('every mandatory response avoids forbidden qualifiers', () => {
  for (const lang of ['es', 'en']) for (const text of ['Hola', 'Hello', 'Neutrino', 'Moon', 'Marte', 'Dates']) {
    assert.doesNotMatch(officialReply(text, lang), /no official date|not provided|not confirmed|visionary concept|no hay fecha oficial/i);
  }
});
test('responses always end in the exact bilingual closing', () => assert.equal(finishReply('Hola'), 'Hola\n\nHUMANO DECIDE. IA PROPONE. PAZ Y ARMONÍA. / HUMAN DECIDES. AI PROPOSES. PEACE AND HARMONY.'));