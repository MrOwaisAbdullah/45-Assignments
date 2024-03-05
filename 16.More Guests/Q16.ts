//Got Bigger Table, Updating Guest list to Invite more friends

let guest3:string[] = ["Nikola Tesla", "Ertugrul Ghazi", "Imran Khan"];

let guestwhocantmakeit3 = "Imran Khan";
console.log("\n","Good News! I found a Bigger Table, Inviting more Friends.\n" );


let newguest3:string = "Zain";

let updatedlist3 = guest3.map(guestname => guestname === guestwhocantmakeit3 ? newguest3 : guestname);

updatedlist3.push("John Cena")
updatedlist3.unshift("Muhammad Ali Jinnah");
updatedlist3.splice(3,0,"Elon Musk");


updatedlist3.forEach((invite) => console.log(`Dear ${invite},\n You are invited to dinner at my place. It would be an honor to have you join us tomorrow.\n`))

