const express = require ("express")
const router = express.Router()
const User = require("../model/user.model")
const path = require("path")
const upload = require("../fileupload/file.upload")
const fs = require("fs")

router.post("", upload.array("profileImage"), async (req, res) => {
    try {
        const profile_img = req.files.map((el)=>el.path)
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            email: req.body.email,
            profileImage:profile_img
        })

        return res.send(user)
    } catch (e) {
        console.log(e.message)
    }
})
module.exports = router