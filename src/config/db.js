const mongoose = require("mongoose")

module.exports = () => {
    return mongoose.connect("mongodb+srv://partha:das@cluster0.ro8zm.mongodb.net/test")
}