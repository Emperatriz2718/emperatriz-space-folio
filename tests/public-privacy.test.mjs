import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';

function publicSources(file, visited = new Set()) {
  if (visited.has(file)) return '';
  visited.add(file);
  const text = readFileSync(file, 'utf8');
  let sources = text;
  for (const match of text.matchAll(/import\s+(?:[^'";]*?\s+from\s+)?['"]([^'"]+)['"]/g)) {
    const spec = match[1];
    if (!spec.startsWith('.') && !spec.startsWith('@/')) continue;
    const base = spec.startsWith('@/') ? path.resolve('src', spec.slice(2)) : path.resolve(path.dirname(file), spec);
    for (const suffix of ['', '.tsx', '.ts']) {
      try { sources += publicSources(base + suffix, visited); break; } catch (error) { if (error.code !== 'ENOENT' && error.code !== 'EISDIR') throw error; }
    }
  }
  return sources;
}
const sources = publicSources(path.resolve('src/App.tsx'));
test('public application excludes personal value phrase', () => assert.equal(sources.includes('Mi valor jamás depende de lo material'), false));
test('public application excludes loyalty plate', () => assert.equal(sources.includes('Lámina de Lealtad'), false));
test('public application excludes private WhatsApp number and link', () => { assert.equal(sources.includes('573163973857'), false); assert.equal(sources.includes('wa.me/'), false); });
test('public application excludes personal pages', () => { assert.equal(sources.includes('personal-profile-title'), false); assert.equal(sources.includes('noir-page'), false); });
