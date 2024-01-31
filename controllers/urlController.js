const shortid = require('shortid');
const ShortUrl = require("../models/urlModel");

const posturl = async (req, res) => {
    const { fullUrl } = req.body;
    if (!fullUrl) {
        res.sendStatus(400);
        throw new Error("Long Url can't be left unfilled!");
    }
    try {
        const shortenedUrl = shortid(); // Changed shortid() to shortid.generate()
        const url = await ShortUrl.create({ fullUrl, shortUrl: shortenedUrl });
        res.json(url);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};

const getShortenedUrl = async (req, res) => {
    try {
        const shortUrl = req.params.id;
        console.log(shortUrl);
        const urlInfo = await ShortUrl.findOne({ shortUrl });
        console.log(urlInfo)
        if (urlInfo) {
            res.redirect(urlInfo.fullUrl)
        }
        else res.status(404)
    } catch (error) {
        console.error("Error in getShortenedUrl:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = { posturl, getShortenedUrl };
