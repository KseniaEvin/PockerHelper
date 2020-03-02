const { getSuits, getRanks, cardDifference } = require('./utilities');
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
  const counter = cardDifference(ranks, 1);
  return counter>=4;
};

let fourOfAKind = function (sevenCards) {
  const ranks = getRanks(sevenCards);
  const counter = cardDifference(ranks, 0);
  return counter === 3;
};

let threeOfAKind = function (sevenCards) {
  const ranks = getRanks(sevenCards);
  const counter = cardDifference(ranks, 0);
  return counter === 2;
};

let repeat = function (sevenCards) {
  const ranks = getRanks(sevenCards);
  const repeats = ranks.filter((elem, index) => {
    return index !== ranks.indexOf(elem) || index !== ranks.lastIndexOf(elem);
  });
  console.log(repeats)
  return repeats;
};


module.exports = {
  flush,
  straight,
  fourOfAKind,
  threeOfAKind,
  repeat
}
