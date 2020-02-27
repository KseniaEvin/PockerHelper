const { getSuits, getRanks } = require('./utilities');
let flush = function (sevenCards) {
  let suits = getSuits(sevenCards);
  let suitsNumber = suits.filter((item, i, list) => item === list[0]);
  if (suitsNumber.length >= 5) {
  return suitsNumber.every((item, i, list) => item === list[0]);
  }
  return false;
};

let straight = function (sevenCards) {
  const ranks = getRanks(sevenCards);
  let counter = 0;
  for(let i = 0; i < ranks.length; i++) {
      let diff = ranks[i+1] - ranks[i];
      if (diff === 1) {
          counter++;
      }
      else if (diff > 1) {
          counter = 0;
      }
  };
      return counter >= 4; 
};

let repeat = function (sevenCards) {
  const ranks = getRanks(sevenCards);
  const repeats = ranks.filter((elem, index) => {
    return index !== ranks.indexOf(elem) || index !== ranks.lastIndexOf(elem);
  });

  return repeats;
};

module.exports = {
  flush,
  straight,
  repeat
}
