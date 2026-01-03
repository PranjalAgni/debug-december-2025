/*
The Yeti is ready to set the mood with beautiful string lights
around the office. Yeti has a list of all the light IDs that need to be
turned on, and Yeti has written a function to handle it. But when Yeti
flips the switch... nothing happens! The lights should be glowing by now,
but the party space remains dark. Something's not working as expected
with the lighting system.

Can you help Yeti illuminate the party?
*/

async function turnOnLights(lightIds) {
  const results = [];

  lightIds.forEach(async (id) => {
    try {
      results.push(`Light ${id} is on`);
    } catch (err) {
      console.log(err.message);
    }
  });

  return results;
}
