"use strict";
//Modifying the array of magicians name and making them great😁
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Harry Houdini", "David Blaine", "David Copperfield", "Penn and Teller", "Derren Brown",];
let make_great = (magicians) => {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
    ;
};
let show_magicians = (magicians) => {
    magicians.forEach(name => {
        console.log(name);
    });
};
make_great(magicians);
show_magicians(magicians);
