const Twit = require('./twit')

export default async () => {
  const tweets = await Twit()
  const result = tweets.data.map(tw => tw.text)

  return {
    data: {
      result
    }
  }
}
