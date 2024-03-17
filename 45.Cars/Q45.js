"use strict";
//Creating a function that take parameters and also any optional parameters(if we want to give it) and store them into in object properties and then print it.
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, modelName, ...options) {
    let carInfo = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    options.forEach(option => {
        let key = Object.keys(option)[0];
        let value = option[key];
        carInfo[key] = value;
    });
    return carInfo;
}
let carDetails = storeCarInfo('Audi', 'Q8', { Color: 'Black' }, { Year: 2024 });
console.log(carDetails);
