const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    body: { type: String, require: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", require: true },
    postId : {type: mongoose.Schema.Types.ObjectId, ref: "post", require: true }
}, {
    timestamps : true
})

const comment = mongoose.model("comment", commentSchema)

module.exports = comment