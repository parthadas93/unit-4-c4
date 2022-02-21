const mongoose = require("mongoose")

const postLikeSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "post", require: true },
    userId : {type: mongoose.Schema.Types.ObjectId, ref: "user", require: true }
})

const postLike = mongoose.model("postlike", postLikeSchema)

module.exports = postLike