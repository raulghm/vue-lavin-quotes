const Twit = require('twit')

const t = new Twit({
  consumer_key: process.env.TWITTER_KEY,
  consumer_secret: process.env.TWITTER_SECRET,
  access_token: process.env.TWITTER_TOKEN,
  access_token_secret: process.env.TWITTER_TOKEN_SECRET,
  timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
})

const isReply = (tweet) => {
  let result = false

  if (tweet.retweeted_status
    || tweet.in_reply_to_status_id
    || tweet.in_reply_to_status_id_str
    || tweet.in_reply_to_user_id
    || tweet.in_reply_to_user_id_str
    || tweet.in_reply_to_screen_name) {
    result = true
  }
  return result
}

const getRandom = max => Math.floor(Math.random() * max)

const max = 30

const getTweet = () =>
  t.get('statuses/user_timeline', {
    screen_name: 'ideasdelavin',
    count: max,
    exclude_replies: true,
    include_rts: false,
  })
  .catch(err => err)
  .then((result) => {
    const tweets = result.data.filter((tweet) => {
      if (!isReply(tweet)) {
        return true
      }
      return false
    })

    return tweets[getRandom(tweets.length)].text
  })

export default async () => {
  const tweet = await getTweet()

  return {
    data: {
      result: tweet,
    },
  }
}
