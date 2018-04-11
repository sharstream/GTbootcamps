
var argument = process.argv;

if (argument[2] === 'add') {
    console.log(parseFloat(argument[3]) + parseFloat(argument[4]));
}
else if (argument[2] === 'subtract') {
    console.log(parseFloat(argument[3]) - parseFloat(argument[4]));
}
else if (argument[2] === 'multiply') {
    console.log(parseFloat(argument[3]) * parseFloat(argument[4]));
}
else if (argument[2] === 'divide') {
    console.log(parseFloat(argument[3]) / parseFloat(argument[4]));
}
else if (argument[2] === 'remainder') {
    console.log(parseFloat(argument[3]) % parseFloat(argument[4]));
}
else if (argument[2] === 'power') {
    console.log(Math.pow(parseFloat(argument[3]),parseFloat(argument[4])));
}
else if (argument[2] === 'square') {
    console.log(Math.sqrt(parseFloat(argument[3])));
}
else if (argument[2] === 'algebra') {
    // if(argument[2].charAt(1))
    console.log(((process.argv[3].charAt(5) + process.argv[3].charAt(6)) - process.argv[3].charAt(3)) / process.argv[3].charAt(0));
}