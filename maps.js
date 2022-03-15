let words = ['look','at','all','these','words'];
let caps = words.map(word=>word.toUpperCase());
console.log(caps);

var number = [0,2,4,6,8];
var addFive = number.map(function(base) {
    return base+5;
});
console.log(addFive);

var number = [0,2,4,6,8];
var addFive = number.map(function(integer) {
    return integer + 5;
    });

var words2 = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sWords = words2.filter(animal=> animal = /s.*/);
console.log(sWords);