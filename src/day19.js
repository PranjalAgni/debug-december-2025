/*
The Yeti set up a digital ticket machine for the party, but guests are 
complaining that they're getting the wrong ticket numbers! Each ticket office 
window needs to issue unique, sequential ticket numbers, and the Yeti used 
atomic operations to handle concurrent requests safely.

However, guests keep showing up with duplicate ticket numbers, causing chaos 
at the entrance. Can you help the Yeti fix the ticket machine before the 
party starts?
*/

function purchaseTicket(ticketOfficeNumber) {
  // Atomically increment the ticket count by 1
  // ticketOfficeCounters is a shared array buffer already defined like:
  // const sharedBuffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * NUM_TICKET_OFFICES);
  // const ticketOfficeCounters = new Int32Array(sharedBuffer);
  Atomics.add(ticketOfficeCounters, ticketOfficeNumber, 1);

  return {
    ticketNumber: Atomics.load(ticketOfficeCounters, ticketOfficeNumber),
    ticketOfficeNumber,
  };
}
