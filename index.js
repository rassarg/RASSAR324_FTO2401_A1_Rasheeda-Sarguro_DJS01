/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialSpeed = 10000; // initial speed (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // time in seconds (1 hour)
const initialDistance = 0; // initial distance (km)
const initialFuel = 5000; // initial fuel amount (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

const newDistance = initialDistance + initialSpeed * timeInSeconds; // calculates new distance
const remainingFuel = fuelBurnRate * timeInSeconds; // calculates remaining fuel
const newSpeed = calculateNewSpeed(acceleration, initialSpeed, timeInSeconds); // calculates new speed based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calculateNewSpeed = (initialSpeed, acceleration, timeInSeconds) => {
  return initialSpeed + acceleration * timeInSeconds;
};

console.log(`Corrected New Speed: ${newSpeed} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
