<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col col-2 border border-dark card" v-for="card in sevenCards" :class="{red: card.suit==='Diamonds' || card.suit==='Hearts'}">{{card.suit}} <br> {{card.rank}}</div>
        </div>
      </div>
</template>

<script>
export default {
    data() {
            return {
              sevenCards: [ { suit: 'Diamonds', rank: 10 },
                { suit: 'Hearts', rank: 12 },
                { suit: 'Hearts', rank: 11 },
                { suit: 'Hearts', rank: 14 },
                { suit: 'Clubs', rank: 13 },
                { suit: 'Hearts', rank: 14 },
                { suit: 'Spades', rank: 13 } ]
              } 
          }
}
</script>