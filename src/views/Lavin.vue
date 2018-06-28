<template>
  <div class="Lavin">
    <div class="Lavin-header">
      <h1>Lavin Quotes</h1>
      <avatar :isActive="tweet"/>
    </div>

    <div class="Lavin-quote">
      <Loading type="relative" v-if="!tweet" />

      <img v-if="tweet" class="Lavin-icon" src="/img/ico-quote.svg" alt="icon">

      <transition name="fade">
        <blockquote
          v-text="tweet"
          v-if="tweet"
        ></blockquote>
      </transition>
    </div>

    <footer>
      <p><small>Using Vue + Twitter API + Graphcool API resolver</small></p>
      <p><small>Tweets from: <a href="https://twitter.com/ideasdelavin">@ideasdelavin</a> | Source: <a href="https://github.com/raulghm/vue-lavin-quotes">raulghm/vue-lavin-quotes</a></small></p>
    </footer>
  </div>
</template>

<script>
import TWEETS from '@/graphql/Tweets.gql'
import Loading from '@/components/Loading'
import Avatar from '@/components/Avatar'

const INTERVAL = 6000

export default {
  name: 'Lavin',

  components: {
    Loading,
    Avatar
  },

  data: () => ({
    tweet: null
  }),

  mounted () {
    this.getQuotes()
  },

  methods: {
    /**
     * Inicia peticion de quotes
     * si no hay datos en el store hidrata contra la API
     * si hay datos en el store continua
     */
    getQuotes () {
      if (!this.checkStore()) {
        this.hydrate()
      } else {
        this.play()
      }
    },

    /**
     * Revisa si existe la clave principal en el store
     */
    checkStore () {
      return !!localStorage.getItem('lavinTweets')
    },

    /**
     * Guarda datos en el store local
     */
    setStore (data) {
      localStorage.setItem('lavinTweets', JSON.stringify(data))
    },

    /**
     * Obtiene un quote random de localstorage
     * y elimina el ultimo item
     */
    getStore () {
      const data = JSON.parse(localStorage.getItem('lavinTweets'))
      data.pop()
      this.setStore(data)
      const random = Math.floor(Math.random() * data.length - 1)

      return data[random]
    },

    /**
     * Hidrata el store, llamando a la API
     * por mas quotes
     * luego continua el proceso normal
     */
    hydrate: async function () {
      const data = await this.fetchData()

      if (data) {
        this.setStore(data)
        this.play()
      }
    },

    /**
     * Peticion hacia la api por mas quotes
     */
    fetchData () {
      return new Promise(resolve => {
        this.$apollo
          .query({
            query: TWEETS
          })
          .then(result => resolve(result.data.tweets.result))
      })
    },

    /**
     * Obtiene quotes cada cierto tiempo
     * si no encuentra mas intenta re hidratar
     */
    play () {
      this.tweet = this.getStore()

      const play = setInterval(() => {
        if (!this.getStore()) {
          clearInterval(play)
          this.hydrate()
        }
        this.tweet = this.getStore()
      }, INTERVAL)
    }
  }
}
</script>

<style scoped>
.Lavin {
  text-align: center;
  padding: 20px;
  display: grid;
  align-content: center;
  justify-content: center;
  height: 90vh;
}

.Lavin-header {
  margin-bottom: 40px;
}

.Lavin-header h1 {
  font-size: 3rem;
}

.Lavin-quote {
  text-align: center;
  max-width: 600px;
}

.Lavin-icon {
  width: 160px;
  position: absolute;
  z-index: -1;
  opacity: .1;
  margin-top: -40px;
  margin-left: -40px;
}

@media (min-width: 40em) {
  .Lavin-icon {
    width: 200px;
  }
}

.Lavin-quote small {
  display: block;
}

.Lavin-quote blockquote {
  font-size: 3rem;
  display: inline-block;
  font-family: Georgia, Serif;
  line-height: 1.1;
}

@media (min-width: 40em) {
  .Lavin-quote blockquote {
    font-size: 4rem;
  }
}

@media (min-width: 50em) {
  .Lavin-quote blockquote {
    font-size: 5rem;
  }
}

.Lavin footer {
  border-top: 1px solid rgba(255, 255, 255, .2);
  margin-top: 6em;
  padding-top: 1rem;
}
</style>
