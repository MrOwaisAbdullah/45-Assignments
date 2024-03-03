//This program checks the username and Greet the user but if the user is admin then it prints a different message.

let userNames:string[] = ["Owais", "Admin", "Zain", "Abdullah", "Ali", "Salaar"];

for (let i=0; i<userNames.length; i++) {
    if (userNames[i]==="Admin"){
        console.log("Hello Admin, would you like to see a status report?")
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    }
}