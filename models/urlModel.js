const mongoose = require("mongoose");


const shortenUrlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

module.exports = model.Schema("ShortUrl", shortenUrlSchema);