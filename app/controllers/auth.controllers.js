const jwt = require('jsonwebtoken');
const User = require('../models/User.models');
require('dotenv/config')

const authcontroller = {
    login: async(req, res) => {
        const user = await User.findOne({ email: req.body.email })
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


    },

    signUp: async (req, res) => {
        const user = new User({
            namaLengkap: req.body.namaLengkap,
            email: req.body.email,
            password: req.body.password,
            admin: req.body.admin,
        });

        try {
            const savedUser = await user.save();
            res.status(201).send({message: "registered", user: savedUser});
        } catch (error) {
            res.status(500).send({message: error});
        }     
    }
}

module.exports = authcontroller;