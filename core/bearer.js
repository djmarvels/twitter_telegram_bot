const getBearerToken = require('get-twitter-bearer-token')
const twitter_consumer_key = 'ESZWySgpVqHvn89oW89F1DwJX'
const twitter_consumer_secret = 'Py6nf3uwnGhgsviVwE03BO3UVzYQmngWLRHXC5bXz2043AnNzO'

const getBearer = () => {
    return new Promise((resolve) => {
         getBearerToken(twitter_consumer_key, twitter_consumer_secret, (err, res) => {
     if (err) {
         reject (err)
     } else {
         resolve (res.body.access_token)
     }
 })
    })
}

module.exports = (async () => {
    return await getBearer();
})();