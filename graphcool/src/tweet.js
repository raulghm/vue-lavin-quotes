const Twit = require('twit')

const t = new Twit({
  consumer_key: 'PVXFHEdZJZ8HnMrtZPAMvy0QD',
  consumer_secret: 'KCEhOr0Eapyiujs0CIcOJ9xbtW7ti2N7seCXSoTSdY3D3xWU35',
  access_token: '22852911-stUl1Kp1NqmFizNcVZYJUkAWNV9KrcfO8X6XJRTUf',
  access_token_secret: 'W6Pogn0FxqJ3ONKOeORVQAieDMGfqThmfwvsYK6EMHNgl',
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
    include_rts: false
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

export default async event => {
  const tweet = await getTweet()

  return {
    data: {
      result: tweet,
    },
  }
}
