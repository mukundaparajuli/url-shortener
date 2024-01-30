const shortid = require('shortid')
const ShortUrl = require("../models/urlModel")
// @desc post url
// @route api/posturl
// 
const posturl = (req, res) => {
    const { longUrl } = req.body;
    if (!longUrl) {
        res.sendStatus(403);
        throw new Error("Long Url cant be left unfilled!")
    }
    const url = ShortUrl.create({ fullUrl: req.body.longUrl })
    console.log(url)
    res.json(shortid())
}

module.exports = posturl;