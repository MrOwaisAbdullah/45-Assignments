"use strict";
//Creatin a function that take name of city and country and return in this format "Lahore, Pakistan"
Object.defineProperty(exports, "__esModule", { value: true });
let city_country = (city, country) => {
    return `${city}, ${country}`;
};
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Istanbul", "Turkey"));
console.log(city_country("New York", "USA"));
