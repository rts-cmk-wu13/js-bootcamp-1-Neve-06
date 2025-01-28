let quotes = ["Do you like scary movies?", "Here's Johnny!", "Was that the boogeyman?", "Be afraid, Be very afraid", "Whatever you do, don't fall asleep", "You'll float too", "You're gonna need a bigger boat", "Where is everyone going? Bingo?", "In my restless dreams, i see that town. Silent hill", "Hi i am Chucky, your friend till the end"];
let quotesElm = document.querySelector(".quotebox");
let quoteIndex = Math.floor(Math.random() * quotes.length);
console.log(quoteIndex);


let i = 0;

quotesElm.innerHTML = quotes[quoteIndex];
