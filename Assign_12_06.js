<input type="text" id="instr">
<button onclick="charRepeat()">Submit</button>

<button onclick="check_instantRepeat()">Check Instant Repeat</button>

<div id="result"></div>



//take any string and it should return which character is return how many times which is case-insensitive

function charRepeat() {
    var text = document.getElementById("instr").value;
    text = text.toLowerCase(); //Update the text to lowercase

    var counts = {}; // to store the count of the characters
    var output = ""; //defined outside because it will add the result

    for (var i = 0; i < text.length; i++) {
        var character = text[i]; // Assign the value of character

        if (counts[character]) {//check if the character is already there
            counts[character]++;
        } else {
            counts[character] = 1;
        }
    }

    for (var character in counts) {
        output += character + " : " + counts[character] + "<br>";
    }

    document.getElementById("result").innerHTML = output;
}



// take a string , check which character is repeating immediately
// mmddyya
// m,d,y are repeating

function check_instantRepeat(){

var text = document.getElementById("instr").value;
    text = text.toLowerCase();

    var repeated = "";
    var output = "";

    for (var i = 0; i < text.length - 1; i++) {

      if(text[i] == text[i+1]){
        if(repeated.indexOf(text[i]) == -1){
           repeated += text[i];
           output += text[i] + "<br>";
        }
      }

    }
    document.getElementById("result").innerHTML = 'Repeating keywords are as below:' + "<br>" + output;
}