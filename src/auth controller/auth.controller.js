require("dotenv").config()
const User = require("../model/user.model")
var jwt = require("jsonwebtoken")
const { body, validationResult } = require('express-validator');

const register = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send("error")
        }
        const user = await User.findOne({email: req.body.email})
        if (user) {
            return res.send("User already exixts")
        } else {
            const user = await User.create(req.body)
            var token = jwt.sign({ user }, process.env.JWT_SECRET_KEY);
            return res.send ({user, token})
        }
    }

    catch (e) {
        console.log(e.message)
    }
}

const login = async (req, res) => {
    try {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const user = await User.finfOne({email: req.body.email})
        if (!user) {
            return res.send("user not registered")
            
        }
        
        const match = user.checkPassword(req.body.password)
        if (!match) {
            return res.send("password or email invalid")
        }

        var token = jwt.sign({ user }, process.env.JWT_SECRET_KEY);
        return res.send({user, token})


    }catch(e){
        console.log(e.message)
    }
}

module.exports = {register, login}