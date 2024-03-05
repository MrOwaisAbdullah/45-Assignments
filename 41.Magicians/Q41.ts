//creating an array of magicians name then using it in an array and print the names of magician on the console 

let magicians: string[] = ["Harry Houdini", "David Blaine", "David Copperfield", "Penn and Teller", "Derren Brown", ];

let show_magicians = (magicians: string[]) => {
    magicians.forEach(name => {
        console.log(name);
    })};

show_magicians(magicians);