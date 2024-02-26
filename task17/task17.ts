//Got Bigger Table, Updating Guest list to Invite more friends

let guest:string[] = ["Nikola Tesla", "Ertugrul Ghazi", "Imran Khan"];

let guestwhocantmakeit = "Imran Khan";
console.log("\n","Good News! I found a Bigger Table, Inviting more Friends.\n" );


let newguest:string = "Zain";

let updatedlist = guest.map(guestname => guestname === guestwhocantmakeit ? newguest : guestname);

updatedlist.push("John Cena")
updatedlist.unshift("Muhammad Ali Jinnah");
updatedlist.splice(3,0,"Elon Musk");


updatedlist.forEach((invite) => console.log(`Dear ${invite},\n You are invited to dinner at my place. It would be an honor to have you join us tomorrow.\n`))

console.log("I am Sorry Friends! I can't invite you all to dinner, So I'm inviting only 2 friends");

while (updatedlist.length > 2) {
     console.log(`Sorry ${updatedlist[0]}, I can't invite you to dinner`);
     updatedlist.shift();
}
updatedlist.forEach(invite => {
    console.log(`Dear ${invite},\n You are still invited to dinner at my place. It would be an honor to have you join us tomorrow.\n`)
});

updatedlist.pop();
updatedlist.pop();

console.log(updatedlist);