let deck = [];

const suits = ["Spades", "Hearts", "Clubs", "Diamonds"]

const ranks = [2, 3, 4, 5, 6, 7, 8,
  9, 10, 11, 12, 13, 14]

for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < ranks.length; j++) {
    let card = { suit: suits[i], rank: ranks[j] };
    deck = [...deck, card];
  }
}

console.log(deck);

let fiveCards = [];

function getRandomCard(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

while (fiveCards.length !== 5) {
  let index = getRandomCard(deck.length);
  fiveCards.push(deck[index]);
  fiveCards = fiveCards.filter((value, index, fiveCards) => fiveCards.indexOf(value) === index);
}
console.log(fiveCards);

let flush = function isFlush(fiveCards){
    let arr = fiveCards.map((card) => card.suit);
    return (arr.every((item, i, list) => item === list[0])); 
};

let a = [];

let straight = function isStraight(fiveCards){
    let arr = fiveCards.map((card) => card.rank);
        arr.sort( function (a,b) {
        return a - b;
  }); 
  for (let i = 0; i < arr.length-1; i++) {
       a.push((arr[i+1] - arr[i]));
    }
    if (a[0] ===1 ) {
        return (a.every((item, i, list) => item === list[0]));
};
};
let straightFlush = function isStraightFlush(flush, straight) {
    return (straight(fiveCards) && flush(fiveCards));    
}; 

let flushRoyal = function isFlushRoyal(straightFlush, flush, straight){
   let arr = fiveCards.map((card) => card.rank);
   arr.sort(function (a,b) {
    return a - b;
  });
   if (straightFlush(flush, straight) && arr[0] === 10) {
      console.log("Флеш Рояль");
   } 
   if (straightFlush(flush, straight) && arr[0] !== 10) {
      console.log("Стрит Флэш");
   } 
   else if (straight(fiveCards) && !flush(fiveCards)) {
    console.log("Стрит");
   } 
   else if (flush(fiveCards) && !straight(fiveCards)) {
    console.log("Флэш");
   }
   
};
function isRepeat(fiveCards){
  let arr = fiveCards.map((card) => card.rank);
  repeats = arr.filter(function (elem, index) {
    return index !== arr.indexOf(elem) || index !== arr.lastIndexOf(elem);
});

  if (repeats.length === 2) {
    console.log("Пара");
  }
  else if (repeats.length === 3) {
    console.log("Тройка");
  }
  else if ((repeats.every((item, i, list) => item == list[0])) && repeats.length === 4) {
    console.log("Каре");
  }
  else if (repeats.length === 4) {
    console.log("Две пары");
  }
  else if (repeats.length === 5){
    console.log("Фулл Хаус");
  }
}

flush(fiveCards);
straight(fiveCards);
straightFlush(flush, straight);
isRepeat(fiveCards);
flushRoyal(straightFlush, flush, straight);