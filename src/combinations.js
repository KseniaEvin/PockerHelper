const { getSuits, getRanks } = require('./utilities');
const flush = function (sevenCards) {
  const suits = getSuits(sevenCards);
  const suitsNumber = suits.filter((item, i, list) => item === list[0]);
  if (suitsNumber.length >= 5) {
  return suitsNumber.every((item, i, list) => item === list[0]);
  }
  return false;
};

const straight = function (sevenCards) {
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

const fourOfAKind = function(sevenCards) {
  const ranks = getRanks(sevenCards);
  let counter = 0;
  for(let i=0; i<ranks.length; i++) {
      let diff = ranks[i+1] - ranks[i];
      if (diff === 0) {
          counter++;
          if (counter === 3)  {
              return true;
          }   
      }
      else {
          counter = 0;
      }
  } 
      return false;
};

const threeOfAKind = function(sevenCards) {
  const ranks = getRanks(sevenCards);
  let counter = 0;
  for(let i=0; i<ranks.length; i++) {
      let diff = ranks[i+1] - ranks[i];
      if (diff === 0) {
          counter++;
          if (counter === 2)  {
              return true;
          } 
      }
      else {
          counter = 0;
      }
  } 
  return false;
};

const repeat = function (sevenCards) {
  const ranks = getRanks(sevenCards);
  const repeats = ranks.filter((elem, index) => {
    return index !== ranks.indexOf(elem) || index !== ranks.lastIndexOf(elem);
  });

  return repeats;
};

module.exports = {
  flush,
  straight,
  fourOfAKind,
  threeOfAKind,
  repeat
}
