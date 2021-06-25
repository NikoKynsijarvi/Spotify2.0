"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express_1.default();
app.use(cors());
app.use(bodyParser.json());
app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new spotify_web_api_node_1.default({
        redirectUri: 'http://localhost:3000',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken
    });
    spotifyApi.refreshAccessToken().then((data) => {
        res.json({
            accesToken: data.body.access_token,
            expiresIn: data.body.expires_in
        });
    }).catch((err) => {
        res.sendStatus(400);
        console.log(err);
    });
});
app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new spotify_web_api_node_1.default({
        redirectUri: 'http://localhost:3000',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    });
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accesToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        });
    }).catch((err) => {
        res.sendStatus(400);
        console.log(err);
    });
});
app.listen(3001);
