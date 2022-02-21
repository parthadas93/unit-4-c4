const mongoose = require("mongoose")

// - body (string, optional),
// - likes (integer, minimum default is 0)
// - image (string, optional)
// - timestamps (string, required)

const postSchema = new mongoose.Schema({
    body: { rype: String, require: false },
    likes: { type: Number, default: 0 },
    image: { type: String, require: false },
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "user", require: true}
},
    {
    timestamps: true
    })

const Post = mongoose.model("post", postSchema)
    
module.exports = Post