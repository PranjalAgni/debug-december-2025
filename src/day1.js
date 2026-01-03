/*
The Yeti is planning the office holiday party and is trying to restore 
power to the party venue! The circuit breaker system crashed and needs
a new configuration.

This function should create a fresh power config while keeping the
backup config untouched (in case we need to roll back).

But something's wrong, the backup config keeps changing too!
*/

function restorePower(newPowerLevel) {
  const backUpConfig = getBackupConfig();
  const newConfig = structuredClone(backUpConfig);

  // Updating the power level.
  newConfig.mainPanel.circuits.powerLevel = newPowerLevel;

  return newConfig;
}
