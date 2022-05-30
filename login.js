require("dotenv").config();
const { TwitterApi } = require("twitter-api-v2");

async function Login() {
  const client = new TwitterApi({
    appKey: process.env.API_KEY,
    appSecret: process.env.API_KEY_SECRET,
    accessToken: process.env.OAUTH_TOKEN,
    accessSecret: process.env.OAUTH_TOKEN_SECRET,
  });

  client
    .login(process.env.OAUTH_VERIFIER)
    .then(({ client: loggedClient, accessToken, accessSecret }) => {
      // loggedClient is an authenticated client in behalf of some user
      // Store accessToken & accessSecret somewhere
      console.log(loggedClient);
    })
    .catch(() => console.log("Invalid verifier or access tokens!"));
}

Login();
