const prepareCardsBeforeGame = require('./setup');
const { fiveCards } = prepareCardsBeforeGame();
console.log(fiveCards);

let flush = function isFlush(fiveCards){
    let arr = fiveCards.map((card) => card.suit);
    return (arr.every((item, i, list) => item === list[0])); 
};

let straight = function isStraight(fiveCards){
    let a = [];
    let arr = fiveCards.map((card) => card.rank);
        arr.sort((a,b) => (a - b)); 
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
let repeat = function isRepeat(fiveCards){
  let arr = fiveCards.map((card) => card.rank);
  repeats = arr.filter((elem, index) => {
    return index !== arr.indexOf(elem) || index !== arr.lastIndexOf(elem);
});
};
function checks(flush, straight, repeat) {
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
repeat(fiveCards);
flushRoyal(straightFlush, flush, straight);
checks(flush, straight, repeat);