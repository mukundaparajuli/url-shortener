const mongoose = require("mongoose");
const { Schema, model } = require("mongoose")

const shortenUrlSchema = new Schema({
    fullUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true,
    }
}, {
    timestamps: true,
})

module.exports = model("ShortUrl", shortenUrlSchema);