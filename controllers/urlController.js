const shortid = require('shortid')
const ShortUrl = require("../models/urlModel")

const posturl = async (req, res) => {
    const { longUrl } = req.body;
    if (!longUrl) {
        res.sendStatus(400);
        throw new Error("Long Url cant be left unfilled!")
    }
    try {
        console.log(longUrl)
        const shortenedUrl = shortid();
        console.log(shortenedUrl)
        const url = await ShortUrl.create({ fullUrl: longUrl, shortUrl: shortenedUrl })
        res.json(url)
    } catch (error) {
        console.log(error)
    }
}

//@route /geturl/:shortid
const getShortenedUrl = async (req, res) => {
    const url = await ShortUrl.findOne({ shortUrl: req.params.shortId });

    if (url) {
        res.redirect(url.longUrl);
    } else {
        res.sendStatus(404);
    }

}
module.exports = { posturl, getShortenedUrl };