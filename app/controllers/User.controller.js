const User = require('../models/User.models');

const UserController = {
    post: async(req, res) => {
        const user = new User({
            namaUser: req.body.namaUser,
            userName: req.body.userName,
            password: req.body.password,
            role: req.body.role,
        });
        try {
            const savedUser = await user.save();
            res.json(savedUser);
        } catch (error) {
            res.json(error);
        }
    },

    getById: async(req, res) => {
        const getuser = await User.findById(req.params.id);
        res.json(getuser);
    },


    destroy: async(req, res) => {
        const getuser = await User.findOneAndDelete(req.params.id);
        res.json(getuser);
    },

    Update: async(req, res) => {
        const updateUser = await User.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                userName: req.body.userName,
                password: req.body.password,
            }
        });
        res.json(updateUser);
    },

    get: async(req, res) => {
        try {
            const getUser = await User.find();
            res.json(getUser);
        } catch (error) {
            res.json(error);
        }
    },
}

module.exports = UserController;