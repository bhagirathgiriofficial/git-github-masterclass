// A more concise way to write the same function using an arrow function
const calculateCircleAreaModern = (radius) => {
  // You can make this even shorter since it's a single return expression
  return Math.PI * radius ** 2;
};

// --- How to use the function ---
const radiusValueModern = 10;
const areaResultModern = calculateCircleAreaModern(radiusValueModern);

console.log(`The area using the modern arrow function with a radius of ${radiusValueModern} is: ${areaResultModern}`);
// Expected output: The area using the modern arrow function with a radius of 10 is: 314.1592653589793
