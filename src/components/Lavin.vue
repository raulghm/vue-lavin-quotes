<template>
  <div class="Lavin">
    <div class="Lavin-header">
      <h1>Lavin Quotes</h1>
      <div class="Lavin-avatar"></div>
    </div>

    <div class="Lavin-quote">
      <Loading type="relative" v-if="!tweet" />

      <img v-if="tweet" class="Lavin-icon" src="https://image.flaticon.com/icons/svg/23/23713.svg" alt="icon">

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
import TWEET from '@/gql/Tweet.gql'
import Loading from '@/components/Loading'

export default {
  name: 'Lavin',

  components: {
    Loading,
  },

  data() {
    return {
      tweet: null,
    }
  },

  apollo: {
    tweet: {
      query: TWEET,
      update({ tweet }) {
        return tweet.result
      },
    },
  },
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

.Lavin-avatar {
  display: inline-block;
  background-image: url(https://pbs.twimg.com/profile_images/460949987816267776/ZGXxQz8I_400x400.jpeg);
  border-radius: 50%;
  width: 10vw;
  height: 10vw;
  min-width: 100px;
  min-height: 100px;
  background-size: cover;
  background-position: 50%;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
  margin-top: 10px;
}

.Lavin-quote {
  text-align: center;
  max-width: 400px;
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
