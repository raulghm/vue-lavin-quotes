const { getTweets, hasImage, getImageFromEntities, getRandom } = require('./twit')

export default async () => {
  const tweets = await getTweets()
  const result = tweets.data[getRandom(tweets.data.length)]
  let image = null
  if (hasImage(result.text)) {
    image = await getImageFromEntities(result)
  }
  return {
    data: {
      result: result.text,
      image: image
    }
  }
}
