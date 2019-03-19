var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
// var targetNumber =  randomNum(19,120);

$("#number-to-guess").html(targetNumber);
console.log(targetNumber);

var counter = 0;
var wins = 0;
var losses = 0;
var numberOptions = [10, 5, 3, 7];

for (var i = 0; i < numberOptions.length; i++) {
    console.log(numberOptions[i]);
    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");
    imageCrystal.attr('src',"http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function() {
    var crystalvalue = ($(this).attr("data-crystalvalue"));
    crystalvalue = parseInt(crystalvalue);
    counter += crystalvalue;

    alert("New Score: " + counter);

    if (counter === targetNumber) {
        alert("Congratulations! You win!");
        wins ++;
        $("#wins").html("Wins: " + wins);
        reset()
    }

    else if (counter >= targetNumber) {
        alert("Oh no! You went over...");
        losses ++;
        $("#losses").html("Losses: " + losses)
        reset()
    }

   
})

var reset = function reset() {

    counter =  0;

   targetNumber = randomNum(19,120);

   $("#number-to-guess").html(targetNumber);
console.log(targetNumber);

    numberOptions = randomOpt();
};

var randomNum = function(min,max){
    var tempNum = Math.floor(Math.random() * (max - min + 1)) + min
    return tempNum;
    
}

