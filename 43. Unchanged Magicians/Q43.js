"use strict";
//creating two arrays and printing them using show_magician function. one is original unchanged array and the other is Modified one that makes them great.
Object.defineProperty(exports, "__esModule", { value: true });
let OgMagicians = ["Harry Houdini", "David Blaine", "David Copperfield", "Penn and Teller", "Derren Brown",];
let ModMagicians = [...OgMagicians];
let make_great = (magicians) => {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
    ;
    return magicians;
};
let show_magicians = (magicians) => {
    magicians.forEach(name => {
        console.log(name);
    });
};
ModMagicians = make_great(ModMagicians);
show_magicians(OgMagicians);
show_magicians(ModMagicians);
