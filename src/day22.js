/*
The Yeti set up the party's music system with a fancy song queue.
Everything was going great until the DJ app tried to save the playlist state...
now the same track keeps looping and everyone's getting tired of it!

The Yeti knows the songs are in the queue, but something's wrong with how
the system is trying to remember what's playing. Help the Yeti fix the queue
so the party can keep the beats flowing!
*/

class SongQueue {
  #queue;
  constructor(initialQueue) {
    if (!Array.isArray(initialQueue)) {
      throw new Error('Initial queue must be an array');
    }
    // 🔒 We want this to be hard-private field
    // so no one can mess with it directly
    this.#queue = initialQueue;
  }

  // Returns the current queue
  getQueue() {
    return this.#queue;
  }

  // Add a song to the queue
  addSong(song) {
    this.#queue.push(song);
  }

  // Remove a song from the queue
  removeSong(song) {
    this.#queue.splice(this.#queue.indexOf(song), 1);
  }

  // Should return a JSON string of the queue state
  // e.g. '{"queue":["Song 1", "Song 2", "Song 3"]}'
  toString() {
    console.log(this);
    return JSON.stringify(this.#queue);
  }
}

function createSongQueue(initialQueue) {
  return new SongQueue(initialQueue);
}
