        let newDeck = [];
        let deck = {
        suits: ["Spades", "Hearts", "Clubs", "Diamonds"],
        ranks: ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
                     "Nine", "Ten", "Jack", "Queen", "King", "Ace"]
    }
     
            for(let i = 0; i < deck.suits.length; i++) {
               for(let j = 0; j < deck.ranks.length ; j++){
                newDeck1 = newDeck.push(`${deck.suits[i]} ${deck.ranks[j]}`);
              } 
             
      } 
    
                console.log(newDeck);
        
        let fiveCards = [];

        function getRandomCard(max) {
          return Math.floor(Math.random() * Math.floor(max)); 
        }
  
  
        while (fiveCards.length != 5) {
            let index = getRandomCard(newDeck.length);    
            fiveCards.push(newDeck[index]);    
            fiveCards = fiveCards.filter((value, index, fiveCards) => fiveCards.indexOf(value) == index);
  
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
    