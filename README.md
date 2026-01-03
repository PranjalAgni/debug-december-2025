# Debug December 2025 - JavaScript Fundamentals Challenge

A collection of 24 debugging challenges from Sentry's Debug December 2025, covering essential JavaScript concepts and common pitfalls.

## Challenge Overview

This repository contains solutions to daily debugging problems that explore critical JavaScript fundamentals. Each problem presents a real-world scenario where subtle bugs need to be identified and fixed.

---

## Daily Learnings

### Day 1: Deep Copying Objects
**Concept:** Object cloning and reference handling

**Key Learning:** JavaScript object assignment creates references, not copies. When working with nested objects, use `structuredClone()` to create true deep copies. This prevents unintended mutations to the original object when modifying the clone.

**Solution:** Replace shallow copying with `structuredClone(backUpConfig)` to avoid reference-based mutations.

---

### Day 2: Switch Statement Fall-through
**Concept:** Control flow in switch statements

**Key Learning:** Switch cases in JavaScript "fall through" to subsequent cases unless explicitly terminated with `break`, `return`, or `throw`. Missing break statements cause unintended code execution in following cases.

**Solution:** Add proper `break` statements or use `return` to exit switch cases correctly.

---

### Day 3: BigInt for Large Numbers
**Concept:** Numeric precision and BigInt

**Key Learning:** JavaScript's `Number` type has limitations beyond `Number.MAX_SAFE_INTEGER` (2^53 - 1). For very large integers, use `BigInt` to maintain precision. Operations with BigInt require the `n` suffix (e.g., `1n`).

**Solution:** Convert numbers to BigInt using `BigInt()` constructor and use BigInt arithmetic operators.

---

### Day 4: Async Operations in forEach
**Concept:** Asynchronous iteration

**Key Learning:** `forEach()` doesn't wait for async callbacks to complete. The loop returns immediately, leaving async operations pending. Use `for...of` loop with `await`, or `Promise.all()` with `map()` for proper async iteration.

**Solution:** Replace `forEach(async ...)` with a traditional `for...of` loop that properly awaits each async operation.

---

### Day 5: Stateful Regex Global Flag
**Concept:** Regular expression state management

**Key Learning:** Regex with the global flag (`/pattern/g`) maintains internal state via the `lastIndex` property. Repeated calls to `search()`, `test()`, or `exec()` on the same regex object can produce inconsistent results due to this stateful behavior.

**Solution:** Create a new regex instance for each use, or reset `lastIndex` to 0, or avoid the global flag if not needed for multiple matches.

---

### Day 6: Generator Functions
**Concept:** Generators and lazy evaluation

**Key Learning:** Generator functions (using `function*` and `yield`) provide lazy iteration patterns. They're ideal for producing infinite sequences or managing state between calls without maintaining external variables.

**Solution:** Implement generators properly with `yield` statements to produce values on-demand.

---

### Day 7: Array Mutation During Iteration
**Concept:** Safe array manipulation

**Key Learning:** Modifying an array while iterating over it can cause unexpected behavior because array indices shift. The length changes during iteration, causing elements to be skipped.

**Solution:** Cache the array length before iteration, iterate backwards, or work on a copy of the array.

---

### Day 8: Unicode String Reversal
**Concept:** Unicode and grapheme clusters

**Key Learning:** Strings in JavaScript are sequences of UTF-16 code units, not characters. Emoji and complex characters may consist of multiple code units (grapheme clusters). Simple string reversal can break these clusters.

**Solution:** Use proper Unicode-aware splitting with `/(?:)/u` regex or libraries that handle grapheme clusters correctly.

---

### Day 9: Closures in Loops
**Concept:** Variable capture in closures

**Key Learning:** When creating closures inside loops, the closure captures the variable reference, not its value. With `var`, all closures share the same variable. Use `let` or `const` to create block-scoped variables, giving each closure its own binding.

**Solution:** Replace `var` with `let` in loop declarations, or use an IIFE to capture the value.

---

### Day 10: Generator Exhaustion
**Concept:** Generator lifecycle

**Key Learning:** Generators are iterators that can only be consumed once. After exhaustion (when all values are yielded), the generator returns done and can't be reset. To iterate multiple times, create a new generator instance.

**Solution:** Create a new generator instance for each iteration instead of reusing an exhausted generator.

---

### Day 11: Deep Freezing Objects
**Concept:** Object immutability

**Key Learning:** `Object.freeze()` only performs shallow freezing—nested objects remain mutable. For true immutability, recursively freeze all nested objects.

**Solution:** Implement a `deepFreeze()` function that recursively freezes all object properties.

---

### Day 12: Object Property Name Collisions
**Concept:** Prototype pollution and property safety

**Key Learning:** Object properties can collide with built-in properties like `constructor`, `toString`, or `__proto__`. Using untrusted input as object keys can lead to prototype pollution or unexpected behavior.

**Solution:** Use a prefix for keys (e.g., `c__${value}`) or use `Map` instead of plain objects for safer key-value storage.

---

### Day 13: JSON.stringify Key Ordering
**Concept:** JSON serialization behavior

**Key Learning:** The order of properties in JSON output from `JSON.stringify()` is not guaranteed to be stable across JavaScript engines, especially with numeric-like string keys. Relying on key order for cache keys or comparisons can cause bugs.

**Solution:** Use a consistent serialization approach, sort keys before stringifying, or use a more reliable cache key strategy.

---

### Day 14: Promise.any vs Promise.race
**Concept:** Promise combinators

**Key Learning:** `Promise.any()` resolves when the first promise fulfills (ignoring rejections until all fail), while `Promise.race()` settles when the first promise settles (fulfill or reject). Understanding the difference is crucial for proper error handling.

**Solution:** Use `Promise.any()` when you want the first successful result and can tolerate individual failures.

---

### Day 15: Method Context Binding
**Concept:** The `this` keyword and method binding

**Key Learning:** Methods passed as callbacks lose their `this` context. When a method is extracted from an object and called elsewhere, `this` becomes `undefined` (in strict mode) or the global object.

**Solution:** Use `.bind(this)` in the constructor or use arrow functions to preserve the context.

---

### Day 16: Callback Context Loss
**Concept:** Context preservation in callbacks

**Key Learning:** When passing instance methods as callbacks to array methods like `map()`, the `this` context is lost. The method needs explicit binding or context specification.

**Solution:** Pass the context as the second argument to `map()` or use `.bind()` on the callback function.

---

### Day 17: Proxy Trap Implementation
**Concept:** JavaScript Proxy behavior

**Key Learning:** Proxy traps that return `true` only indicate the operation was handled without error—they don't prevent the operation. To actually block changes, the trap must not perform the operation on the target.

**Solution:** Return `true` without calling `Reflect.set()` or directly mutating the target to prevent changes while appearing to succeed.

---

### Day 18: Generator Delegation with yield*
**Concept:** Recursive generator patterns

**Key Learning:** The `yield*` operator delegates to another generator or iterable, properly yielding all its values. This is essential for recursive generator patterns like recursive tree traversal or nested array flattening.

**Solution:** Use `yield* flatten(item)` instead of `yield flatten(item)` to delegate to nested generators.

---

### Day 19: Atomic Operations Race Conditions
**Concept:** Concurrency and atomic operations

**Key Learning:** Even with `Atomics.add()`, race conditions can occur between the atomic operation and subsequent reads. Multiple threads might execute the add and then read the value, seeing inconsistent results.

**Solution:** Use the return value from `Atomics.add()`, which returns the previous value, allowing you to calculate the new value atomically.

---

### Day 20: Symbol.for() Global Registry
**Concept:** Symbol behavior and global symbol registry

**Key Learning:** `Symbol()` creates unique symbols every time, but `Symbol.for()` uses a global registry. Symbols created with the same key using `Symbol.for()` are identical across the entire runtime.

**Solution:** Use `Symbol.for()` when you need symbols to be shared/retrievable, or use regular `Symbol()` for truly unique identifiers.

---

### Day 21: Object Type Coercion with valueOf
**Concept:** Type coercion and object conversion

**Key Learning:** JavaScript automatically calls `valueOf()` when objects are used in numeric contexts (comparisons, arithmetic). Custom `valueOf()` implementations enable objects to participate naturally in numeric operations.

**Solution:** Implement `valueOf()` to return the appropriate numeric representation of your object.

---

### Day 22: Private Fields and JSON Serialization
**Concept:** Class private fields behavior

**Key Learning:** Private class fields (declared with `#`) are not included in `JSON.stringify()` output. They're not enumerable properties and are intentionally invisible outside the class.

**Solution:** Implement a custom `toJSON()` method that explicitly returns the private fields in a plain object structure.

---

### Day 23: Bitwise Operations for IP Addresses
**Concept:** Bitwise operations and unsigned right shift

**Key Learning:** JavaScript's bitwise operators work on 32-bit signed integers. IP address calculations can overflow into negative numbers. Use unsigned right shift (`>>> 0`) to convert results to unsigned 32-bit integers.

**Solution:** Apply `>>> 0` to ensure IP address integers remain in the unsigned 32-bit range.

---

### Day 24: Event Loop Mechanics
**Concept:** JavaScript event loop, microtasks, and macrotasks

**Key Learning:** The JavaScript event loop has strict priority rules:
1. Call stack (synchronous code) - runs to completion
2. Microtask queue (Promises, queueMicrotask) - **all** microtasks run before any macrotask
3. Macrotask queue (setTimeout, setInterval) - **one** task per loop iteration

The key insight: The microtask queue is completely drained after each macrotask, even if new microtasks are added during processing.

**Solution:** Process all microtasks before moving to the next macrotask, ensuring the correct priority order.

---

## Key Takeaways

This challenge reinforces critical JavaScript concepts:

- **Memory Management:** Understanding references vs values, deep vs shallow copying
- **Asynchronous Patterns:** Proper async/await usage, Promise combinators, event loop mechanics
- **Type System:** BigInt, type coercion, Symbol behavior
- **Object Behavior:** Prototypes, proxies, freezing, serialization
- **Concurrency:** Atomic operations, race conditions
- **Language Quirks:** Regex state, generator lifecycle, closure captures, bitwise operations

## Running the Code

Each day's solution is in `src/dayN.js`. The files are structured as standalone modules demonstrating the fix for that day's problem.

```bash
node src/day1.js
node src/day2.js
# ... etc
```

---

**Challenge by:** Sentry
**Completed:** December 2025
