import { examQuestions } from '../src/questions.js';

function pickPractice(practiceExam) {
  const allQuestions = [...examQuestions];
  let startId = 1;
  let endId = 100;
  let count = 100;
  if (practiceExam === 1) { startId = 1; endId = 100; count = 100; }
  else if (practiceExam === 2) { startId = 101; endId = 200; count = 100; }
  else if (practiceExam === 3) { startId = 201; endId = 310; count = 110; }

  const pool = allQuestions.filter(q => q.id >= startId && q.id <= endId);
  const shuffled = pool.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));
  return selected.map(q => q.id);
}

for (const n of [1,2,3]) {
  const ids = pickPractice(n);
  console.log(`Practice ${n}: count=${ids.length} first10=${ids.slice(0,10).join(',')}`);
}

// Run multiple times to observe variance
console.log('--- Repeat ---');
for (const n of [1,2,3]) {
  const ids = pickPractice(n);
  console.log(`Practice ${n}: count=${ids.length} first10=${ids.slice(0,10).join(',')}`);
}
