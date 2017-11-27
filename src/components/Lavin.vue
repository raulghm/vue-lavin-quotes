<template>
  <div class="Lavin">
    <div class="Lavin-avatar"></div>
    <div class="Lavin-quote">
      <transition name="fade">
        <blockquote
          v-text="tweet"
          v-if="tweet"
        ></blockquote>
      </transition>
    </div>
  </div>
</template>

<script>
import TWEET from '@/gql/Tweet.gql'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
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
  width: 180px;
  height: 180px;
  background-size: cover;
  background-position: 50%;
}

.Lavin-quote {
  font-size: 3rem;
  text-align: center;
}

.Lavin-quote blockquote {
  max-width: 800px;
  display: inline-block;
  font-weight: bold;
}
</style>
