import resources from "./resources.json";

function getRandomEvenNumber(min: number, max: number): number {
  const range = Math.floor((max - min) / 2) + 1;
  const randomOffset = Math.floor(Math.random() * range) * 2;
  return min + randomOffset;
}

export default function generateCompoundNames() {
  const nouns: string[] = resources.nouns;
  const adjectives: string[] = resources.adjectives;
  const verbs: string[] = resources.verbs;

  const nWordsRetrieved = getRandomEvenNumber(100, nouns.length);
  const nStart = getRandomEvenNumber(1, nouns.length - nWordsRetrieved);
  //   const nEnd = nStart + nWordsRetrieved;

  var compoundWordsGenerated: string[] = [];

  for (let i = nStart; i < nWordsRetrieved + nStart; i++) {
    let word = adjectives[i] + " " + nouns[i];
    if (i % 2 == 0) {
      word = verbs[i] + " " + nouns[i];
    }
    compoundWordsGenerated.push(word);
  }

  return compoundWordsGenerated;
}
