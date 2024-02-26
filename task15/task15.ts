//Someone can't make it to dinner, So updating Array and removing the person and adding new person to invite

let guest:string[] = ["Nikola Tesla", "Ertugrul Ghazi", "Imran Khan"];
guest.forEach((invite) => console.log(`Dear ${invite},\n You are invited to dinner at my place. It would be an honor to have you join us tomorrow.\n`))


let guestwhocantmakeit = "Imran Khan";
console.log("\n","Unfortunately", guestwhocantmakeit, "can't make it today!\n" );

console.log("Updated guest list\n\n");

let newguest:string = "Zain";

let updatedlist = guest.map(guest => guest === guestwhocantmakeit ? newguest : guest);

updatedlist.forEach((invite2) => console.log(`Dear ${invite2},\n You are invited to dinner at my place. It would be an honor to have you join us tomorrow.\n`))
