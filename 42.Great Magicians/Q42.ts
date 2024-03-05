//Modifying the array of magicians name and making them great😁

let magicians: string[] = ["Harry Houdini", "David Blaine", "David Copperfield", "Penn and Teller", "Derren Brown", ];

let make_great = (magicians: string[]) => {
for (let i=0; i < magicians.length; i++) {
    magicians[i] = "The Great " + magicians[i]};
    }

let show_magicians = (magicians: string[]) => {
    magicians.forEach(name => {
        console.log(name);
    })};

make_great(magicians);

show_magicians(magicians);


