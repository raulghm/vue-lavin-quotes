const Twit = require('twit')

const t = new Twit({
  consumer_key: process.env.TWITTER_KEY,
  consumer_secret: process.env.TWITTER_SECRET,
  access_token: process.env.TWITTER_TOKEN,
  access_token_secret: process.env.TWITTER_TOKEN_SECRET,
  timeout_ms: 60 * 1000 // optional HTTP request timeout to apply to all requests.
})

/**
 * Obtiene imagen incrustada desde un tweet.
 *
 * @param {Object} data - Objecto con data de un tweet.
 * @return {Promise<string>} URL de una imagen.
 */
const getImageFromEntities = async data => {
  if (data.entities.media && data.entities.media.length > 0) {
    return data.entities.media[0].media_url_https
  } else if (data.entities.urls && data.entities.urls.length > 0) {
    const id = data.entities.urls[0].expanded_url.replace(/https?:\/\/twitter.com\/\w+\/status\/(\w+)/, '$1')
    const urlData = await t.get(`statuses/show/${id}`)
    return getImageFromEntities(urlData)
  } else {
    return null
  }
}

/**
 * Determina si un tweet posee una imagen incrustada.
 *
 * @param {string} text - Texto de un tweet.
 * @return {boolean}
 */
const hasImage = text => /https:\/\/t.co\/\w+/.test(text)

/**
 * Obtiene un numero random dado un numero máximo.
 *
 * @param {number} max - Texto de un tweet.
 * @return {number}
 */
const getRandom = max => Math.floor(Math.random() * max)

/**
 * Obtiene tweets
 * @param {number} [count=20] - maximo de tweets a extraer
 * @return {Promise<Object>}
 */
const getTweet = async (count = 200) => {
  const tweets = await t
    .get('statuses/user_timeline', {
      screen_name: 'ideasdelavin',
      count,
      exclude_replies: true,
      include_rts: false,
      trim_user: true,
      include_entities: true
    })
  const result = tweets.data[getRandom(tweets.data.length)]
  if (hasImage(result.text)) {
    const image = await getImageFromEntities(result)
    result.image = image
  }
  return result
}

module.exports = getTweet
