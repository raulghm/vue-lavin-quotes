<template>
  <div class="Lavin">
    <div class="Lavin-avatar"></div>
    <h1>Lavin Quotes</h1>

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
  name: 'Lavin',

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

.Lavin-avatar {
  display: inline-block;
  background-image: url(https://pbs.twimg.com/profile_images/460949987816267776/ZGXxQz8I_400x400.jpeg);
  border-radius: 50%;
  width: 12vw;
  height: 12vw;
  min-width: 100px;
  min-height: 100px;
  background-size: cover;
  background-position: 50%;
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
