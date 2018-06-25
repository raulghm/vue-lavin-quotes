<template>
  <div class="Lavin">
    <div class="Lavin-quote">
      <small v-if="!tweet">loading...</small>
      <img v-if="tweet" class="Lavin-icon" src="https://image.flaticon.com/icons/svg/23/23713.svg" alt="icon">

      <transition name="fade">
        <blockquote
          v-text="tweet"
          v-if="tweet"
        ></blockquote>
      </transition>

      <footer>
        <p><small>Using Vue + Twitter API + Graphcool API resolver</small></p>
        <p><small>Twits from: <a href="https://twitter.com/ideasdelavin">@ideasdelavin</a> | Source: <a href="https://github.com/raulghm/vue-lavin-quotes">raulghm/vue-lavin-quotes</a></small></p>
      </footer>
    </div>
  </div>
</template>

<script>
import TWEET from '@/gql/Tweet.gql'

export default {
  name: 'HelloWorld',
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
}

.Lavin-quote {
  text-align: center;
}

.Lavin-icon {
  width: 200px;
  position: absolute;
  z-index: -1;
  opacity: .1;
  margin-top: -20px;
}

.Lavin-quote small {
  display: block;
}

.Lavin-quote blockquote {
  font-size: 3rem;
  max-width: 800px;
  display: inline-block;
  font-family: Georgia, Serif;
  line-height: 1.1;
}

.Lavin footer {
  border-top: 1px solid rgba(255, 255, 255, .2);
  margin-top: 3rem;
  padding-top: 1rem;
}
</style>
