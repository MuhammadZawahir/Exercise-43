"use strict";
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians = ["Harry Houdini", "David Blane", "Shin Lim"];
function show_magicians() {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great() {
    for (let magician of magicians) {
        magician = 'The Great ' + magician;
        console.log(magician);
    }
}
console.log('\nNormal Names:\n');
show_magicians();
console.log('\nGreat Names:\n');
make_great();
