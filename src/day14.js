/* 
The party room is freezing! The Yeti rushes to fix the central thermostat,
which collects temperature readings from multiple sensor stations around
the office.

The system is supposed to adjust based on whichever sensor responds first,
but something's not quite right—the thermostat keeps giving up too early
when a sensor fails to report.

Can you help the Yeti fix the temperature control before guests arrive?

*/
async function getFastest() {
  try {
    const measurements = getMeasurements();
    return await Promise.any([...measurements]);
  } catch (err) {
    console.log('Error in some promise: ', err);
  }
}
