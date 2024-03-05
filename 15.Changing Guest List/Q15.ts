//Someone can't make it to dinner, So updating Array and removing the person and adding new person to invite

let guest4:string[] = ["Nikola Tesla", "Ertugrul Ghazi", "Imran Khan"];
guest4.forEach((invite) => console.log(`Dear ${invite},\n You are invited to dinner at my place. It would be an honor to have you join us tomorrow.\n`))


let guestwhocantmakeit4 = "Imran Khan";
console.log("\n","Unfortunately", guestwhocantmakeit4, "can't make it today!\n" );

console.log("Updated guest list\n\n");

let newguest4:string = "Zain";

let updatedlist4 = guest4.map(guest => guest === guestwhocantmakeit4 ? newguest4 : guest);

updatedlist4.forEach((invite4) => console.log(`Dear ${invite4},\n You are invited to dinner at my place. It would be an honor to have you join us tomorrow.\n`))
