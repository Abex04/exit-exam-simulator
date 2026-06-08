import { examQuestions } from '../src/questions.js';

const normalize = s => (s || '').replace(/\s+/g, ' ').trim();
const hashString = (str) => {
  const s = (str || '').toString();
  let hash = 5381;
  for (let i = 0; i < s.length; i++) {
    hash = ((hash << 5) + hash) + s.charCodeAt(i);
    hash = hash & 0xffffffff;
  }
  return Math.abs(hash);
};

function pickPractice(practiceExam) {
  const allQuestions = [...examQuestions];
  const count = practiceExam === 3 ? 110 : 100;
  const bucketIndex = Math.max(0, Math.min(2, practiceExam - 1));
  // Build disjoint buckets similar to App.jsx logic
  const desired = [100, 100, 110];
  const rawBuckets = [[], [], []];
  allQuestions.forEach(q => {
    const text = q.q || q.question || q.raw?.question || '';
    rawBuckets[hashString(text) % 3].push(q);
  });
  for (let i = 0; i < 3; i++) rawBuckets[i] = rawBuckets[i].sort((a,b)=>a.id-b.id);

  const final = [[], [], []];
  const leftovers = [];
  for (let i = 0; i < 3; i++) {
    if (rawBuckets[i].length <= desired[i]) final[i] = rawBuckets[i].slice();
    else {
      final[i] = rawBuckets[i].slice(0, desired[i]);
      leftovers.push(...rawBuckets[i].slice(desired[i]));
    }
  }
  for (let i = 0; i < 3; i++) {
    while (final[i].length < desired[i] && leftovers.length > 0) final[i].push(leftovers.shift());
  }
  const pool = final[bucketIndex] || [];
  return pool.slice(0, Math.min(count, pool.length)).map(q => q.q);
}

const sets = [1,2,3].map(n => pickPractice(n));
console.log('Counts:', sets.map(s => s.length));

// Check for overlap by exact question text
const s1 = new Set(sets[0].map(normalize));
const s2 = new Set(sets[1].map(normalize));
const s3 = new Set(sets[2].map(normalize));

const inter12 = [...s1].filter(x => s2.has(x));
const inter13 = [...s1].filter(x => s3.has(x));
const inter23 = [...s2].filter(x => s3.has(x));

console.log('Overlap counts:', inter12.length, inter13.length, inter23.length);
if (inter12.length || inter13.length || inter23.length) {
  console.log('Some overlaps found. Sample overlaps (up to 5):');
  console.log('1&2:', inter12.slice(0,5));
  console.log('1&3:', inter13.slice(0,5));
  console.log('2&3:', inter23.slice(0,5));
} else {
  console.log('No overlaps — practice sets are disjoint by question text.');
}
