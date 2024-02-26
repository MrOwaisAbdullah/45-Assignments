let favPlaces: string[] = ["Paris","Saudi Arabia","Turkey","Switzerland","Dubai"];

console.log("\n\nOriginal Order:", favPlaces);

console.log("\n\nAlphabetical Order:", [...favPlaces].sort());

console.log("\n\nOriginal Order:", favPlaces);

console.log("\n\nReversed Alphabetical Order:",[...favPlaces].sort().reverse());

console.log("\n\nOriginal Order:", favPlaces);

favPlaces.reverse();
console.log("\n\nModified Reverse Order:", favPlaces);

favPlaces.reverse();
console.log("\n\nOriginal Order:", favPlaces);

favPlaces.sort();
console.log("\n\nModified Alphabetical Order:", favPlaces);

favPlaces.sort().reverse();
console.log("\n\nModified Reversed Alphabetical Order:", favPlaces);
