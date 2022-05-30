require("dotenv").config();
const { TwitterApi } = require("twitter-api-v2");

async function GenerateLink() {
  const client = new TwitterApi({
    appKey: process.env.API_KEY,
    appSecret: process.env.API_KEY_SECRET,
  });

  const authLink = await client.generateAuthLink(process.env.CALLBACK_URL, {
    linkMode: "authorize",
  });

  console.log(authLink);
}

GenerateLink();
