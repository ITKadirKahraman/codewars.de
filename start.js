// 1 Aufgabe

function fullName(firstName, lastName) {
    return console.log(firstName + " " + lastName);
}

fullName("Kadir", "Kahraman");

// 2 Aufgabe 

function capitalizeLetters(string) {
    return console.log(string.toUpperCase());
}

capitalizeLetters("bAnanE");

// 3 Aufgabe 
function countCharacters(name) {
    return console.log(name.length);
}

countCharacters("Kadir");

// Knacker Aufgabe

function formatToCurrency(dezimal) {
    return console.log(dezimal.toFixed(2) + "€");
}

formatToCurrency(33.73);
