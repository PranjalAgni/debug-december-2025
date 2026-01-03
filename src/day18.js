/*
The Yeti set up a photo slideshow for the party, but the TV keeps displaying 
weird nested data structures instead of showing the actual photos! The streaming 
function is supposed to flatten the nested album structure into a simple stream 
of photos, but something's not working right. 

Can you help the Yeti fix the stream so the slideshow plays correctly?
*/

/*
Turn [[1, 2], [3, [4]]] into [1, 2, 3, 4].
*/
function* flatten(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* flatten(item);
    } else {
      yield item;
    }
  }
}
