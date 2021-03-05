const express = require("express");
const bodyParser = require("body-parser");
const util = require("util");
const request = require("request");
const path = require("path");
const socketIo = require("socket.io");
const http = require("http");

const app = express();
let port = 3000;

const post = util.promisify(request.post);
const get = util.promisify(request.get);

const server = http.createServer(app);
const io = socketIo(server);

let timeout = 0;

const streamURL = new URL(
    "https://api.twitter.com/2/tweets/search/stream?tweet.fields=context_annotations&expansions=author_id"
);

const rulesURL = new URL(
    "https://api.twitter.com/2/tweets/search/stream/rules"
);

const errorMessage = {
    title: "Please Wait",
    detail: "Waiting for new Tweets to be posted...",
};





const init = async () => {
    const Bearer_Token = await require('./core/bearer')
    console.log(Bearer_Token)
}

init()

