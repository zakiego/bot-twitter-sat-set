require("dotenv").config();
const { TwitterApi } = require("twitter-api-v2");

async function Tweet() {
  const client = new TwitterApi({
    appKey: process.env.API_KEY,
    appSecret: process.env.API_KEY_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_SECRET,
  });

  const createdTweet = await client.v1.tweet(
    "Berhasil bikin bot twitter sat-set!",
  );

  console.log("Tweet", createdTweet.id_str, ":", createdTweet.full_text);
}

Tweet();
