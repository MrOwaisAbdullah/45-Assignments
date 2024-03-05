//Creatin a function that take name of city and country and return in this format "Lahore, Pakistan"

let city_country= (city: string, country:string) => {
    return `${city}, ${country}`;
}

console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Istanbul", "Turkey"));
console.log(city_country("New York", "USA"));