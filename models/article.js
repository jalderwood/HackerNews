const mongoose = require("mongoose");
require("mongoose-type-url");
const url = require("url");

let Article = mongoose.model(
    "Articles",
    new mongoose.Schema({
        poster: {
            type: String
        },
        article: {
            type: mongoose.SchemaTypes.Url,
            required: true
        },
        name: {
            type: String,
            default: "name"  // getTitle
        },
        likes: {
            type: Number,
            default: 0
        },
        date: {
            type: Date,
            default: Date.now
        }
    })
);

exports.Article = Article;
