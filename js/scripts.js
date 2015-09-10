var romanNumeral = function(number) {

    if (number > 3999) {
        return "Please enter a number less than or equal to 3,999.";
    } else if (number === 0) {
        return "Concept of 0 does not exist in roman numerals.";
    } else {
        var romanString = "";
        var romans = new Array("M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I");
        var numbers = new Array(1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1);
        for (var i = 0; i < romans.length; i++) {
            while(number >= numbers[i]) {
                romanString += romans[i];
                number -= numbers[i];
            }
        }
    }
    return romanString;
};


$(document).ready(function(){
  $("form#romanNumeral").submit(function(event) {
        var number = parseInt($("input#number").val());
        var result = romanNumeral(number);

        $(".romanNumerals").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
