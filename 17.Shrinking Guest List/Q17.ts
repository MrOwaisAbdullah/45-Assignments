//Got Bigger Table, Updating Guest list to Invite more friends

let guest2:string[] = ["Nikola Tesla", "Ertugrul Ghazi", "Imran Khan"];

let guestwhocantmakeit2 = "Imran Khan";
console.log("\n","Good News! I found a Bigger Table, Inviting more Friends.\n" );


let newguest2:string = "Zain";

let updatedlist2 = guest2.map(guestname => guestname === guestwhocantmakeit2 ? newguest2 : guestname);

updatedlist2.push("John Cena")
updatedlist2.unshift("Muhammad Ali Jinnah");
updatedlist2.splice(3,0,"Elon Musk");


updatedlist2.forEach((invite) => console.log(`Dear ${invite},\n You are invited to dinner at my place. It would be an honor to have you join us tomorrow.\n`))

console.log("I am Sorry Friends! I can't invite you all to dinner, So I'm inviting only 2 friends");

while (updatedlist2.length > 2) {
     console.log(`Sorry ${updatedlist2[0]}, I can't invite you to dinner`);
     updatedlist2.shift();
}
updatedlist2.forEach(invite => {
    console.log(`Dear ${invite},\n You are still invited to dinner at my place. It would be an honor to have you join us tomorrow.\n`)
});

updatedlist2.pop();
updatedlist2.pop();

console.log(updatedlist2);