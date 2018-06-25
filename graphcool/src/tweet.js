const Twit = require('twit')

const t = new Twit({
  consumer_key: process.env.TWITTER_KEY,
  consumer_secret: process.env.TWITTER_SECRET,
  access_token: process.env.TWITTER_TOKEN,
  access_token_secret: process.env.TWITTER_TOKEN_SECRET,
  timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
})

const getRandom = max => Math.floor(Math.random() * max)

const max = 30

const getTweet = async () => {
  const result = await t.get('statuses/user_timeline', {
    screen_name: 'ideasdelavin',
    count: max,
    exclude_replies: true,
    include_rts: false,
    trim_user: true,
  })

  return result.data[getRandom(result.data.length)].text
}

export default async () => {
  const tweet = await getTweet()

  return {
    data: {
      result: tweet,
    },
  }
}
