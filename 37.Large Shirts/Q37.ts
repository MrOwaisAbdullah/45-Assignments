//creating a function with default parameter values

function make_shirt(size: string = "large", message: string = "I love TypeScript"){
    console.log(`Your shirt is ${size} size with "${message}" Printed on it.`);
}

//default large size and message
make_shirt();

//medium size and default message
make_shirt("medium");

//custom size and message
make_shirt("small", "Hello, world!");