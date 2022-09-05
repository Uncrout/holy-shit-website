var wordCycle = [
    'Städte wie Wälder',
    'Panierte Schuhsohlen',
    'Häuser wie Bäume',
    'Essbare Sitzbezüge', 
    'Ein neues Bio', 
];

textSequence(0);
function textSequence(i) {

    if (wordCycle.length > i) {
        setTimeout(function () {
            document.getElementById("sequence").innerHTML = wordCycle[i];
            textSequence(++i);
        }, 5500); // in milliseconds (1000 = 1 second)

    } 
    else if (wordCycle.length == i) {
        document.getElementById("sequence").innerHTML = 'Umdenken.';
    }
}

//textSequence(0); reaktiviert die obere Funktion