/*
The pizza is on its way! The delivery person arrives at the automated security gate, 
which requires entering guest codes from the approved list.

The gate's virtual machine is ancient and doesn't even have Set implemented, so the 
Yeti quickly coded up a SimpleCustomSet to track authorized delivery codes. Simple 
enough, right?

But now the gate is acting strange. It's either refusing valid codes or completely 
crashing when certain perfectly normal code words are entered. The pizza is getting 
cold outside!

Can you fix the SimpleCustomSet before the delivery person gives up and leaves?
*/

class SimpleCustomSet {
  constructor() {
    // Simple object storage
    this.storage = {};
  }

  add(value) {
    // Store the value. We use the value itself as the key and value.
    const key = `c__${value}`;
    this.storage[key] = value;
  }

  has(value) {
    // Simple check: if it's not undefined, it exists.
    const keys = Object.getOwnPropertyNames(this.storage);
    return keys.includes(`c__${value}`);
  }

  // A helper to print the storage state
  toString() {
    return JSON.stringify(Object.keys(this.storage));
  }
}

// No need to change this function
function createSimpleCustomSet() {
  return new SimpleCustomSet();
}
