/*
The Yeti is planning the office holiday party and has curated the
perfect playlist with all the festive hits. The music streaming system
needs to assign each song a unique incremental ID to queue them properly.

While testing the system with thousands of songs, something's gone
wrong. The last few songs won't get their IDs and the queue seems... stuck?
Without fixing this, there's no party music!
*/

function nextId(currentId) {
  currentId = BigInt(currentId) + 1n;
  return currentId;
}
