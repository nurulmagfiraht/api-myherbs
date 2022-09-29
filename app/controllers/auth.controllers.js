const jwt = require('jsonwebtoken');
const User = require('../models/User.models');
require('dotenv/config')
const authcontroller = {
    login: async(req, res) => {
        const user = await User.findOne({ username: req.body.username })
        if (user.validasipassword(req.body.password)) {
            const token = jwt.sign({
                id: user._id
            }, process.env.JWT_KEY)
            return res.json({ status: 'login', token: token });
        }
        try {
            res.json({ status: 'error', message: 'password atau username salah' })

        } catch (error) {
            res.json(error)
        }


    }
}

module.exports = authcontroller;