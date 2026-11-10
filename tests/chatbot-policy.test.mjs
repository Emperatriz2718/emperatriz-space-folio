import { test } from 'node:test';
import assert from 'node:assert/strict';
import { officialReply, finishReply } from '../supabase/functions/chatbot-emperatriz/agent-policy.mjs';

test('replies are Spanish first, then English', () => {
  const r = officialReply('Hello');
  assert.ok(r.indexOf('Hola, soy la Agente') < r.indexOf('Hello, I am Agent'));
});
test('lunar reply has 2030 and first permanent crew 2032', () => { const r = officialReply('Moon'); assert.match(r, /2030/); assert.match(r, /Primera tripulación permanente 2032/); assert.match(r, /First permanent crew 2032/); });
test('Mars reply has 2036 and settlement 2040', () => { const r = officialReply('Marte'); assert.match(r, /MARTE - 2036/); assert.match(r, /First permanent settlement 2040/); });
test('neutrino reply has 2028 and full network 2040', () => { const r = officialReply('Neutrino'); assert.match(r, /NEUTRINO - 2028/); assert.match(r, /Full Network 2040/); });
test('no forbidden qualifiers', () => { for (const t of ['Hola', 'Neutrino', 'Moon', 'Mars', 'Fechas']) assert.doesNotMatch(officialReply(t), /no official date|not provided|not confirmed|visionary concept|no hay fecha oficial/i); });
test('bilingual closing', () => assert.equal(finishReply('Hola'), 'Hola\n\nHUMANO DECIDE. IA PROPONE. PAZ Y ARMONÍA. / HUMAN DECIDES. AI PROPOSES. PEACE AND HARMONY.'));
