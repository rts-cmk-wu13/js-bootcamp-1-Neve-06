let quotes = ["Do you like scary movies?", "Here's Johnny!", "Was that the boogeyman?", "Be afraid, Be very afraid", "Whatever you do, don't fall asleep", "You'll float too", "You're gonna need a bigger boat", "Where is everyone going? Bingo?", "In my restless dreams, i see that town. Silent hill", "Hi i am Chucky, your friend till the end"]
let quotesElm = document.querySelector("blockquote")

quotes.forEach(function(quote){
    console.log(quote);
    quotesElm += `<blockquote>${quote}</blockquote>`
})