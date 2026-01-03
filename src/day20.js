/*
  The Yeti's karaoke machine is the centerpiece of the party, but there's a
  problem! Partygoers are logging in to queue their favorite songs, but when
  they try to access their session to add songs, the machine acts like they
  never logged in at all.

  The Yeti has checked the microphones, speakers, and even the disco ball—
  everything seems fine! But somehow users can't retrieve their sessions after
  creating them. Fix the session manager so everyone can sing their hearts out!
*/

class SessionManager {
  constructor() {
    this._storage = new Map();
  }

  // Create a session for a user
  createSession(userId, data) {
    // use a symbol to always create a unique session key based on the userId
    const sessionKey = Symbol.for(`USER_SESSION_${userId}`);
    this._storage.set(sessionKey, data);
    console.log(`[Log] Session created for user_${userId}`);
  }

  // Retrieve the session data
  getSession(userId) {
    // recreate the symbol using the same string pattern
    const sessionKey = Symbol.for(`USER_SESSION_${userId}`);

    // Check if it exists and return
    if (this._storage.has(sessionKey)) {
      return this._storage.get(sessionKey);
    } else {
      return null;
    }
  }
}

function createSessionManager() {
  return new SessionManager();
}
