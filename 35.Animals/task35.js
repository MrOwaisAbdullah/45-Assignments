var animal = ["Dog", "Cat", "Goat", "Cow"];
for (var _i = 0, animal_1 = animal; _i < animal_1.length; _i++) {
    var pet = animal_1[_i];
    console.log(pet);
}
animal.forEach(function (pet) {
    console.log("A ".concat(pet, " would be a Great Pet."));
});
console.log("Any of these animals would make a great pet!");
