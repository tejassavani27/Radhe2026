var nameList = [];
var numberList = [];

// Add Name
function addName() {

    var name = document.getElementById("nameInput").value;

    if (name !== "") {

        nameList.push(name);

        document.getElementById("nameInput").value = "";

        document.getElementById("nameListBox").innerHTML = nameList.join("<br>");
    }else{
        alert("Please enter a valid name.");
    }
}

// Add Number
function addNumber() {

    var num = document.getElementById("numberInput").value;

    if (num !== "") {

        numberList.push(Number(num));

        document.getElementById("numberInput").value = "";

        document.getElementById("numberListBox").innerHTML = numberList.join("<br>");
    }else{
        alert("Please enter a valid number.");
    }
}

// Sort Names A-Z
function sortNames() {

    var sortedNames = [];

    for (var i = 0; i < nameList.length; i++) {
        sortedNames.push(nameList[i]);
    }

    sortedNames.sort();

    document.getElementById("sortedNameBox").innerHTML = sortedNames.join("<br>");
}

// Sort Numbers Ascending
function sortNumbersAsc() {

    var sortedNumbers = [];

    for (var i = 0; i < numberList.length; i++) {
        sortedNumbers.push(numberList[i]);
    }

    sortedNumbers.sort(function (a, b) {
        return a - b;
    });

    document.getElementById("sortedNumberAscBox").innerHTML = sortedNumbers.join("<br>");
}

// Sort Numbers Descending
function sortNumbersDesc() {

    var sortedNumbers = [];

    for (var i = 0; i < numberList.length; i++) {
        sortedNumbers.push(numberList[i]);
    }

    sortedNumbers.sort(function (a, b) {
        return b - a;
    });

    document.getElementById("sortedNumberDescBox").innerHTML = sortedNumbers.join("<br>");
}

// Find Highest Number
function findHighest() {

    if (numberList.length === 0) {
        document.getElementById("highestBox").innerHTML = "";
        return;
    }

    var highest = numberList[0];

    for (var i = 1; i < numberList.length; i++) {

        if (numberList[i] > highest) {
            highest = numberList[i];
        }
    }

    document.getElementById("highestBox").innerHTML = highest;
}

// Find Lowest Number
function findLowest() {

    if (numberList.length === 0) {
        document.getElementById("lowestBox").innerHTML = "";
        return;
    }

    var lowest = numberList[0];

    for (var i = 1; i < numberList.length; i++) {

        if (numberList[i] < lowest) {
            lowest = numberList[i];
        }
    }

    document.getElementById("lowestBox").innerHTML = lowest;
}

// Find Matching Names
function findMatching() {

    var searchText = document.getElementById("matchInput").value.toLowerCase();

    var result = [];

    for (var i = 0; i < nameList.length; i++) {

        if (nameList[i].toLowerCase().indexOf(searchText) !== -1) {
            result.push(nameList[i]);
        }
    }

    document.getElementById("matchingBox").innerHTML = result.join("<br>");
}

// Apply Text To Each Name
function applyToEachName() {

    var textToAdd = document.getElementById("appendInput").value;

    var updatedNames = [];

    for (var i = 0; i < nameList.length; i++) {

        updatedNames.push(nameList[i] + textToAdd);
    }

    document.getElementById("updatedNamesBox").innerHTML = updatedNames.join("<br>");
}

// Find Numbers Greater Than Input
function findGreaterNumbers() {

    var enteredNumber = Number(document.getElementById("greaterInput").value);

    var result = [];

    for (var i = 0; i < numberList.length; i++) {

        if (numberList[i] > enteredNumber) {
            result.push(numberList[i]);
        }
    }

    document.getElementById("greaterNumbersBox").innerHTML = result.join("<br>");
}