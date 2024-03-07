//creating two arrays and printing them using show_magician function. one is original unchanged array and the other is Modified one that makes them great.

let OgMagicians: string[] = ["Harry Houdini", "David Blaine", "David Copperfield", "Penn and Teller", "Derren Brown", ];
let ModMagicians = [...OgMagicians];

let make_great = (magicians: string[]) => {
for (let i=0; i < magicians.length; i++) {
    magicians[i] = "The Great " + magicians[i]};
    return magicians;
    }

let show_magicians = (magicians: string[]) => {
    magicians.forEach(name => {
        console.log(name);
    })};

ModMagicians = make_great(ModMagicians);


show_magicians(OgMagicians);
show_magicians(ModMagicians);

