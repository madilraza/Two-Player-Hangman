var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var word = $("#enterWord #word-field");

function getWord() {
  word.val();
  var letter = word.split(' ');
    for (i = 0; i < letter.length; i++) {
      $("#hangmanPlatform").append("<div class='dashes'></div>");
    }
}



// prevent refreshing when button or letter is clicked
$(".alpha").on("click", function(e) {
  e.preventDefault();
  console.log(e);
});

$("#submit-word").on("click", function(e) {
  e.preventDefault();
  console.log(e);
});

// function handleGuesses() {
//   if ()
// }
//
// $("#a").on("click", handleGuesses);

// if letter is in the array, do this
// if not, add to hangman




// function translate (word) {
//     // take a string and make it into an array of letters
//   return word.split("")
//     // iterate over each letter in the array
//       .map(function (letter) {
//       // if the letter is a vowel
//       if( vowels.includes(letter) ) {
//           // add ub infront
//         return "ub" + letter
//       } else {
//           // otherwise just need the letter
//         return letter
//       }
//     })
//     // don't forget to turn the array back into a string
//     .join("")
// }
//
// translate("hello")
