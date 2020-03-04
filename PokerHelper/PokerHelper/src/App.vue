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
             
              } 
          }, 
    computed: {
        sevenCards() {
            return this.$store.state.sevenCards
        }
    }
}
</script>