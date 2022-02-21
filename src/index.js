const express = require("express")
const connect = require("./config/db")
const { register, login } = require("./auth controller/auth.controller")
const userController = require("./controller/user.controller")
const postController = require("./controller/post.controller")
const commentController = require("./controller/comment.controller")
const { body, validationResult } = require('express-validator');
const app = express()
// app.use(express.json())
// - create a post route for users to register with 1 or more profile images
// - create a post route to create posts.
// - create a post route to create comments.
// - a user should be able to login to his account.
// - a user can only update or delete his post.
// - a user can only see 10 posts at a time.
// - a user can only like a post once and if he tries to like it again then it will get removed from likes count.

app.post("/register",
    body("email").isEmail(),
    body("firstName").isEmpty().isAlpha().isLength({ min: 3 }, { max: 30 }),
    register)


app.post("/login", body("email").isEmail(), body("firstName").isEmpty().isAlpha().isLength({ min: 3 }, { max: 30 }), login)

app.use("/user", userController)
app.use("/post", postController)
app.use("/comment", commentController)

app.listen(2600, async function () {
    try {
        connect()
        console.log("listining")
    } catch (e) {
        console.log(e.message)
    }
})