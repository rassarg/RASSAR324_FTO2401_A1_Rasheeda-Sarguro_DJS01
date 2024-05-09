/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocityKmH = 10000; // initial speed (km/h)
const accelerationMs2 = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // time in seconds (1 hour)
const initialDistanceKm = 0; // initial distance (km)
const initialFuelKg = 5000; // initial fuel amount (kg)
const fuelBurnRateKgS = 0.5; // fuel burn rate (kg/s)

// Validate units and handle errors
if (
  isNaN(initialVelocityKmH) ||
  isNaN(accelerationMs2) ||
  isNaN(timeInSeconds) ||
  isNaN(initialDistanceKm) ||
  isNaN(initialFuelKg) ||
  isNaN(fuelBurnRateKgS)
) {
  console.error("Error: Invalid input types. All inputs must be numbers.");
} else if (
  initialVelocityKmH < 0 ||
  accelerationMs2 < 0 ||
  timeInSeconds < 0 ||
  initialFuelKg < 0 ||
  initialDistanceKm < 0 ||
  fuelBurnRateKgS < 0
) {
  console.error("Error: Please add a number greater than 0");
} else {
  // Calculate new distance in kilometers
  const newDistance =
    initialDistanceKm + (initialVelocityKmH * timeInSeconds) / 3600;

  // Calculate remaining fuel in kilograms
  const remainingFuel = initialFuelKg - fuelBurnRateKgS * timeInSeconds;

  // Function to calculate new velocity in kilometers per hour (km/h)
  function calcNewVelocity(accelerationMs2, initialVelocityKmH, timeInSeconds) {
    return initialVelocityKmH + accelerationMs2 * timeInSeconds * 3.6; // convert from m/s to km/h
  }

  // Calculate new velocity
  const newVelocity = calcNewVelocity(
    accelerationMs2,
    initialVelocityKmH,
    timeInSeconds
  );

  console.log(`Corrected New Velocity: ${newVelocity} km/h`);
  console.log(`Corrected New Distance: ${newDistance} km`);
  console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
}
