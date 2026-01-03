/*
The office wifi crashed just as the party playlist was about to drop! Everyone's 
devices are stuck in limbo, and the smart decorations are frozen mid-twinkle.

The Yeti rushes to the server room and discovers the modem's firmware uses a 
memoization function to cache expensive cryptographic hash calculations for each 
device. The function is supposed to speed things up by remembering previous hash 
results, but something's not working right.

Different devices are getting completely wrong cached hash values, as if the modem 
can't tell them apart! The Yeti needs to figure out what's going wrong with the 
cache before the party-goers revolt.

Fix the memoization (https://en.wikipedia.org/wiki/Memoization) function so each 
device gets its own properly cached hash result.
*/

const cache = {};

function memoizeHashCalculation(obj) {
  const key = JSON.stringify(obj);
  if (cache[key]) {
    return cache[key];
  }
  const result = calculateHash(key);
  cache[key] = result;
  return result;
}
