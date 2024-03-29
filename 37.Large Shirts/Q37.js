"use strict";
//creating a function with default parameter values
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Your shirt is ${size} size with "${message}" Printed on it.`);
}
//default large size and message
make_shirt();
//medium size and default message
make_shirt("medium");
//custom size and message
make_shirt("small", "Hello, world!");
