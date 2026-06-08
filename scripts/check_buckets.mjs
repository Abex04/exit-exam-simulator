import { examQuestions } from '../src/questions.js';

const hashString = (str) => {
  const s = (str || '').toString();
  let hash = 5381;
  for (let i = 0; i < s.length; i++) {
    hash = ((hash << 5) + hash) + s.charCodeAt(i);
    hash = hash & 0xffffffff;
  }
  return Math.abs(hash);
};

const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());

const allQuestions = [...examQuestions];
const desired = [100,100,110];
const rawBuckets = [[],[],[]];
allQuestions.forEach(q => {
  const text = q.q || q.question || q.raw?.question || '';
  rawBuckets[hashString(text) % 3].push(q);
});
for (let i=0;i<3;i++) rawBuckets[i] = shuffle(rawBuckets[i]);

const final = [[],[],[]];
const leftovers = [];
for (let i=0;i<3;i++){
  if (rawBuckets[i].length <= desired[i]) final[i]=rawBuckets[i].slice();
  else { final[i]=rawBuckets[i].slice(0,desired[i]); leftovers.push(...rawBuckets[i].slice(desired[i])); }
}
for (let i=0;i<3;i++){
  while (final[i].length < desired[i] && leftovers.length>0) final[i].push(leftovers.shift());
}

// Check duplicates by id
const idCounts = {};
for (let i=0;i<3;i++){
  final[i].forEach(q => { idCounts[q.id] = (idCounts[q.id] || 0) + 1; });
}
const duplicates = Object.entries(idCounts).filter(([,c]) => c>1);
console.log('Total duplicates by id:', duplicates.length);
if (duplicates.length>0) console.log('Sample duplicate ids:', duplicates.slice(0,10));

// Also show overlaps between buckets by id
const set0 = new Set(final[0].map(q=>q.id));
const set1 = new Set(final[1].map(q=>q.id));
const set2 = new Set(final[2].map(q=>q.id));
const inter01 = [...set0].filter(x=>set1.has(x));
const inter02 = [...set0].filter(x=>set2.has(x));
const inter12 = [...set1].filter(x=>set2.has(x));
console.log('Intersections counts:', inter01.length, inter02.length, inter12.length);
if (inter02.length>0) console.log('Inter02 sample ids:', inter02.slice(0,10));
