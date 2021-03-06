var Twitter = require('twitter');
const { Telegraf } = require('telegraf')
require('dotenv').config()
const client = new Twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_SECRET,
    timeout: 0
});

const bot = new Telegraf(process.env.TELEGRAM_TOKEN)
client.stream('statuses/filter', { follow: process.env.TWITTER_USERID },  function(stream) {
    stream.on('data', (tweet) => {
        console.log(tweet)
        if (tweet.user.screen_name === process.env.TWITTER_SCREEN_NAME) {
            bot.telegram.sendMessage(process.env.TELEGRAM_CHAT_ID, `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`)
        }
    });
    stream.on('error', (error) => {
        console.log(error);
    });
});