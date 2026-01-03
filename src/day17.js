/*
The laser show is the grand finale of the party, but someone keeps 
messing with the settings! Yeti set up a monitoring system to catch 
the changes and prevent tampering, but the laser show tech reports 
that the config keeps getting modified in mysterious ways.

Yeti is logging every change attempt, but something's not right. 
The logs shows some activity, yet the protection isn't working as expected. 
Help Yeti secure the laser show config before the big show begins!
*/

function createMonitoredConfig(obj) {
  // creates a Proxy that intercepts and logs all the changes to the config
  return new Proxy(obj, {
    set(target, prop, value) {
      // auditLogger can take any number of arguments, but we only need the operation and prop
      auditLogger('SET', prop);

      // We return true to pretend the assignment worked.
      // If we return false, strict mode would throw a TypeError, alerting the attacker.
      return true;
    },
    deleteProperty(target, prop, value) {
      auditLogger('DELETE', prop);
      return true;
    },
    defineProperty(target, prop, value) {
      auditLogger('[[DefineOwnProperty]]', prop);
      return true;
    },
    setPrototypeOf(target, prop, value) {
      auditLogger('[[SetPrototypeOf]]', prop);
      return true;
    },
  });
}
