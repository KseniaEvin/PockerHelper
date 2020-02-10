    //     let newDeck = [];
    //     let deck = {
    //     suits: ["Spades", "Hearts", "Clubs", "Diamonds"],
    //     ranks: [2, 3, 4, 5, 6, 7, 8,
    //                  9, 10, 11, 12, 13, 14]
    // }
     
    //         for(let i = 0; i < deck.suits.length; i++) {
              
    //            for(let j = 0; j < deck.ranks.length ; j++){
    //             newDeck1 = newDeck.push(`${deck.suits[i]} ${deck.ranks[j]}`);
    //           }   
             
    //   } 
    // console.log(newDeck);


        let deck =[{rank: 2, suit: 'Spades'}, {rank: 2, suit: 'Hearts'}, {rank: 2, suit: 'Clubs'}, {rank: 2, suit: 'Diamonds'}, {rank: 3, suit: 'Spades'}, {rank: 3, suit: 'Hearts'}, {rank: 3, suit: 'Clubs'}, {rank: 3, suit: 'Diamonds'}, 
          {rank:4, suit: 'Spades'}, {rank: 4, suit: 'Hearts'}, {rank: 4, suit: 'Clubs'}, {rank: 4 ,suit: 'Diamonds'}, {rank:5, suit: 'Spades'}, {rank: 5, suit: 'Hearts'}, {rank: 5, suit: 'Clubs'}, {rank: 5 ,suit: 'Diamonds'}, 
          {rank:6, suit: 'Spades'}, {rank: 6, suit: 'Hearts'}, {rank: 6, suit: 'Clubs'}, {rank: 6,suit: 'Diamonds'}, {rank:7, suit: 'Spades'}, {rank: 7, suit: 'Hearts'}, {rank: 7, suit: 'Clubs'}, {rank: 7 ,suit: 'Diamonds'}, 
          {rank:8, suit: 'Spades'}, {rank: 8, suit: 'Hearts'}, {rank: 8, suit: 'Clubs'}, {rank: 8 ,suit: 'Diamonds'}, {rank:9, suit: 'Spades'}, {rank: 9, suit: 'Hearts'}, {rank: 9, suit: 'Clubs'}, {rank: 9 ,suit: 'Diamonds'},
          {rank:10, suit: 'Spades'}, {rank: 10, suit: 'Hearts'}, {rank: 10, suit: 'Clubs'}, {rank: 10 ,suit: 'Diamonds'}, {rank:11, suit: 'Spades'}, {rank: 11, suit: 'Hearts'}, {rank: 11, suit: 'Clubs'}, {rank: 11 ,suit: 'Diamonds'},
          {rank:12, suit: 'Spades'}, {rank: 12, suit: 'Hearts'}, {rank: 12, suit: 'Clubs'}, {rank: 12 ,suit: 'Diamonds'}, {rank:13, suit: 'Spades'}, {rank: 13, suit: 'Hearts'}, {rank: 13, suit: 'Clubs'}, {rank: 13 ,suit: 'Diamonds'},
          {rank:14, suit: 'Spades'}, {rank: 14, suit: 'Hearts'}, {rank: 14, suit: 'Clubs'}, {rank: 14 ,suit: 'Diamonds'}];
        
      console.log(deck);
     
        let fiveCards = [];

        function getRandomCard(max) {
          return Math.floor(Math.random() * Math.floor(max)); 
        }
  
  
        while (fiveCards.length != 5) {
            let index = getRandomCard(deck.length);    
            fiveCards.push(deck[index]);    
            fiveCards = fiveCards.filter((value, index, fiveCards) => fiveCards.indexOf(value) == index);
  
    }  console.log(fiveCards);
   
       
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
    