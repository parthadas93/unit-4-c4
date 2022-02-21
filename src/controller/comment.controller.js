const express = require("express")
const router = express.Router()
const Comment = require("../model/comment.model")
// body: { type: String, require: true },
// userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", require: true },
// postId : {type: mongoose.Schema.Types.ObjectId, ref: "post", require: true }
router.post("", async (req, res) => {
    try {
        const comment = await Comment.create(req.body)
        return res.send(comment)
    } catch (e) {
        console.log(e.message)
    }
})

module.exports = router