const { getTweets } = require('./twit')

export default async () => {
  const tweets = await getTweets()
  const result = tweets.data.map(({ text }) => text)

  return {
    data: {
      result
    }
  }
}
