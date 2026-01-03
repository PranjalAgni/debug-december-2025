/*
The party is in full swing, but disaster strikes! The Yeti's custom JavaScript
event loop engine (powering everything from the light show to the drink orders)
has started processing tasks in the wrong order.

The DJ lights are flickering out of sync, drink orders are arriving before
they're placed, and the karaoke machine is playing songs in a completely
bizarre sequence. The Yeti built this "blazingly fast" engine with such
confidence, but now something is making tasks jump the queue when they
shouldn't.

The Yeti needs the event loop fixed before the party descends into chaos!
Study how the engine processes its queues and restore the proper order.
*/

/**
 * Event Loop Engine - A blazingly fast event loop, faster than Rust and C!!! 😎
 *
 * This engine manages three distinct execution contexts with strict priority rules:
 *
 * **Execution Priority (highest to lowest):**
 * 1. **Call Stack** - Synchronous code that runs immediately and blocks everything else
 * 2. **Microtask Queue** - High-priority async tasks (Promises, queueMicrotask)
 * 3. **Task Queue** - Standard async tasks (setTimeout, setInterval, I/O)
 *
 * **Event Loop Behavior:**
 * The event loop follows these rules on each iteration:
 * - First, execute ALL tasks in the call stack until it's completely empty
 * - Then, process ALL microtasks in the microtask queue until it's completely drained
 *   (even if new microtasks are added during processing, they all run before moving on)
 * - Finally, process exactly ONE task from the task queue (macrotask)
 * - After each macrotask, the cycle repeats: check stack → drain all microtasks → next macrotask
 *
 * **Key Insight:**
 * Stack tasks have priority over microtasks and macrotasks. The stack must be completely empty
 * before the event loop will ever process a microtask or macrotask.
 * Microtasks have priority over macrotasks. The microtask queue must be completely empty
 * before the event loop will ever process a macrotask.
 * **Example execution order:**
 * sync1 → sync2 → micro1 → micro2 → micro3 → macro1 → micro4 → macro2
 * \_________/     \_____________________/   \_______/   \______/
 *    stack              all microtasks       1 macro     repeat
 */
class EventLoopEngine {
  constructor() {
    this.callStack = []; // Where code runs immediately
    this.microtaskQueue = []; // Promises (VIP Queue)
    this.taskQueue = []; // setTimeout (Standard Queue)
    this.processLog = []; // Log of processed tasks
  }

  // 1. Synchronous Code (The Call Stack)
  runSync(taskName, taskFunction) {
    console.log(`[Stack] Pushing: ${taskName}`);
    this.callStack.push({ name: taskName, fn: taskFunction });
    this.executeStack();
  }

  // 2. Microtasks (e.g. Promise.then)
  scheduleMicrotask(taskName, taskFunction) {
    console.log(`[Micro] Queuing VIP: ${taskName}`);
    this.microtaskQueue.push({ name: taskName, fn: taskFunction });
  }

  // 3. Macrotasks (e.g setTimeout)
  scheduleMacrotask(taskName, taskFunction) {
    console.log(`[Macro] Queuing Task: ${taskName}`);
    this.taskQueue.push({ name: taskName, fn: taskFunction });
  }

  // --- THE EVENT LOOP ---
  // This is the heartbeat of the engine
  startEventLoop() {
    console.log('-- EVENT LOOP STARTED --');

    // Keep looping as long as there is something to do
    while (
      this.callStack.length > 0 ||
      this.microtaskQueue.length > 0 ||
      this.taskQueue.length > 0
    ) {
      // A. The Call Stack always has priority
      if (this.callStack.length > 0) {
        this.executeStack();
        // IMPORTANT: skip the rest of the loop, and check the stack again
        continue;
      }

      // B. If Stack is empty, run ONE Microtask (VIPs)
      if (this.microtaskQueue.length > 0) {
        this.executeMicroStack();
        continue;
      }

      // C. If Stack AND Microtasks are empty, run ONE Macrotask
      if (this.taskQueue.length > 0) {
        const macro = this.taskQueue.shift();
        console.log(`> Processing Task: ${macro.name}`);
        this.processLog.push(`> Processing Task: ${macro.name}`);
        macro.fn();
      }
    }
    console.log('--- ALL DONE ---');
  }

  // Helper to run whatever is in the stack
  executeStack() {
    while (this.callStack.length > 0) {
      const task = this.callStack.pop();
      console.log(`> Processing Stack: ${task.name}`);
      this.processLog.push(`> Processing Stack: ${task.name}`);
      task.fn();
    }
  }

  executeMicroStack() {
    while (this.microtaskQueue.length > 0) {
      const micro = this.microtaskQueue.shift();
      console.log(`> Processing VIP: ${micro.name}`);
      this.processLog.push(`> Processing VIP: ${micro.name}`);
      micro.fn();
    }
  }
}

function createEventLoopEngine() {
  return new EventLoopEngine();
}
