function game() {
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

  //Флеш рояль: все карты от 10 до туза
  //Стрит флеш: cтрит в котором Пять карт одномастные
  //Каре: четыре карты одного достоинства
  //фулл хаус: три карты одного достоинства  и две другого
  //флеш: пять карт одной масти
  //стрит: пять последовательно расположенных карт
  //сет: три карты одного достоинства
  //две пары: две пары карт одинакового достоинства
  //пара: две карты одинакового достоинства
  //старшая карта : разные пять карт

}

module.exports = game;
