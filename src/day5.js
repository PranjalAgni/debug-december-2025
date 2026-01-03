/*
The Yeti set up a fun chatbot to handle party RSVPs, but it's gone
haywire! The bot is supposed to filter out spam messages, but instead it's
randomly accepting spam and rejecting legitimate party invites. Everyone's
confused—half the office thinks they're uninvited! The Yeti triple-checked
the spam detection function, but something's still off.

Can you debug the filter before the whole party falls apart?

Return true if the text contains 'spam' (case insensitive). 

*/

const spamRegex = /spam/gi;

function isSpam(text) {
  return text.search(spamRegex) !== -1;
}
