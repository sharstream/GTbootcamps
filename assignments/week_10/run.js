var myBands = require('./bands.js');

if (process.argv[2] === 'classic') {
    console.log(myBands.bands.classic);
}
else if (process.argv[2] === 'rap') {
    console.log(myBands.bands.rap);
}
else if (process.argv[2] === 'punk') {
    console.log(myBands.bands.punk);
}
else{
    for (item in myBands.bands) {
        console.log(myBands.bands[item]);
    }
}

