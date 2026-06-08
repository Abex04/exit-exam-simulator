import { examQuestions } from '../src/questions.js';

const normalize = s => (s || '').replace(/\s+/g, ' ').trim().toLowerCase();

const byQuestion = new Map();
for (const q of examQuestions) {
  const key = normalize(q.q || q.question || q.raw?.question);
  if (!byQuestion.has(key)) byQuestion.set(key, []);
  byQuestion.get(key).push(q.id);
}

const duplicates = [];
for (const [text, ids] of byQuestion.entries()) {
  if (text === '') continue;
  if (ids.length > 1) duplicates.push({ text, ids });
}

console.log(`Total questions loaded: ${examQuestions.length}`);
if (duplicates.length === 0) {
  console.log('No duplicate question texts found. All questions appear unique.');
} else {
  console.log(`Found ${duplicates.length} duplicate question text groups:`);
  for (const d of duplicates) {
    console.log(`IDs: ${d.ids.join(', ')}\n  Text: ${d.text}\n`);
  }
}
