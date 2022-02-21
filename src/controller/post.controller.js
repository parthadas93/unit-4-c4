// body: { rype: String, require: false },
// likes: { type: Number, default: 0 },
// image: { type: String, require: false },
// userId: {type: mongoose.Schema.Types.ObjectId, ref: "user", require: true}
const express = require("express")
const Post = require("../model/post.model")
const router = express.Router()


router.post("", async (req, res) => {
    try {
        const post = await Post.create(req.body)
        return res.send(post)
    } catch(e) {
        console.log(e.message)
    }
})

module.exports = router