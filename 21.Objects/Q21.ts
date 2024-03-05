//Creating an Typescript Object and Storing Data into it...
interface Person {
    Name: string;
    Age: number;
    Occupation?: string;
    City: string;
}

let person: Person = {
    Name: "Owais",
    Age: 23,
    City: "Karachi"
}

console.log(person);

