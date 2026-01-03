/*
The Yeti's big debut on the party planning committee is off to a
rocky start! Yeti programmed a fancy automated greeter to unlock the doors
for the guests, but the system is completely unresponsive. The first
guests are shivering outside, and the doors won't budge. Something is
definitely wrong with the code.

Can you fix it before the hot cocoa gets cold?
*/

function greetAndOpenDoor(room, guestName = 'Guest') {
  guestName = guestName || 'Guest';
  switch (room) {
    case '1':
      return 'Hello, ' + guestName + '. Your room is blue';
    case '2':
      return 'Hello, ' + guestName + '. Your room is red';
    default:
      return 'Unknown';
  }
}
