const mongoose = require("mongoose")


// - firstName (string, required, minimum length 3 and maximum length 30)
// - lastName (string, optional, if given then minimum length 3 and maximum length 30)
// - age (integer, required, should be between 1 and 150)
// - email (string, required, unique)
// - profileImages: (array of imageUrls and atleast 1 profile image is required)
// - timestamps (string, required)

const userSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: false },
    age: { type: Number, require: true },
    email: { type: String, require: true, unique: true },
    profileImage:[{type: String, require: true}]
},
    {
    timestamps: true
    })

const User = mongoose.model("user", userSchema)
module.exports = User;