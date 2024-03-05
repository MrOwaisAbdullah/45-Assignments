//Printing a message to indicate number of guests to invite

let guest1:string[] = ["Nikola Tesla", "Ertugrul Ghazi", "Imran Khan"];

let guestwhocantmakeit1 = "Imran Khan";
console.log("\n","Good News! I found a Bigger Table, Inviting more Friends.\n" );


let newguest1:string = "Zain";

let updatedlist1 = guest1.map(guestname => guestname === guestwhocantmakeit1 ? newguest1 : guestname);

updatedlist1.push("John Cena")
updatedlist1.unshift("Muhammad Ali Jinnah");
updatedlist1.splice(3,0,"Elon Musk");


updatedlist1.forEach((invite) => console.log(`Dear ${invite},\n You are invited to dinner at my place. It would be an honor to have you join us tomorrow.\n`))

console.log("Total number of invited Guests:", updatedlist1.length);