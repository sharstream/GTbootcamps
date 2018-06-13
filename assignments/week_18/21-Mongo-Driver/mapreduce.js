// var mapper = function (item) {
//     return item;
// }
// var reducer = function (intermediate, current) {
//     for (var i = 0; i < current.length; i++) {
//         intermediate[i] = intermediate[i] || [];
//         intermediate[i].push(current[i]);
//     }
//     return intermediate;
// }
// var initial = [];
// var data = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// console.log(data.map(mapper).reduce(reducer, initial));
//Example: Get count of each word in a sentence
//Keys are generated dynamically from data
//Inspired by http://java.dzone.com/articles/javascript-mapreduce-one-liner
var mapper = function (item) {
    return item.toLowerCase()
};
var reducer = function (intermediate, current) {
    if (current) intermediate[current] = (intermediate[current] || 0) + 1;
    return intermediate;
};
var initial = {};
var data = "Did that little red hen just run over that larger, redder black hen over there?".split(" ");
console.log(data.map(mapper).reduce(reducer, initial));