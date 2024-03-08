var myName = "OwAis abduLlah";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
function toTitleCase(Name) {
    return Name.replace(/\w\S*/g, function (word) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
}
console.log(toTitleCase(myName));
