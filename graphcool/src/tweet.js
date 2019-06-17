const Twit = require('./twit')

export default async () => {
  const result = await Twit()

  return {
    data: {
      result: result.text,
      image: result.image
    }
  }
}
