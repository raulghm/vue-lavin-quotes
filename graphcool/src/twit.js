const Twit = require('twit')

const t = new Twit({
  consumer_key: process.env.TWITTER_KEY,
  consumer_secret: process.env.TWITTER_SECRET,
  access_token: process.env.TWITTER_TOKEN,
  access_token_secret: process.env.TWITTER_TOKEN_SECRET,
  timeout_ms: 60 * 1000 // optional HTTP request timeout to apply to all requests.
})

/**
 * Obtiene tweets
 * @param {number} count - maximo de tweets a extraer
 * @return {Promise}
 */
const getTweet = (count = 200) =>
  new Promise(resolve => {
    t
      .get('statuses/user_timeline', {
        screen_name: 'ideasdelavin',
        count,
        exclude_replies: true,
        include_rts: false,
        trim_user: true
      })
      .then(result => resolve(result))
  })

module.exports = getTweet
