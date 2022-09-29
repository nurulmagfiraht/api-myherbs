const Admin = require('../models/');

const AdminController = {
    post: async(req, res) => {
        const admin = new Admin({
            namaUser: req.body.namaUser,
            userName: req.body.userName,
            password: req.body.password,
        });
        try {
            const savedAdmin = await admin.save();
            res.json(savedAdmin);
        } catch (error) {
            res.json(error);
        }
    },

    getById: async(req, res) => {
        const getadmin = await Admin.findById(req.params.id);
        res.json(getadmin);
    },


    destroy: async(req, res) => {
        const getadmin = await Admin.findOneAndDelete(req.params.id);
        res.json(getadmin);
    },

    Update: async(req, res) => {
        const updateAdmin = await Admin.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                namaUser: req.body.namaUser,
                userName: req.body.userName,
                password: req.body.password,
            }
        });
        res.json(updateAdmin);
    },

    get: async(req, res) => {
        try {
            const getAdmin = await Admin.find();
            res.json(getAdmin);
        } catch (error) {
            res.json(error);
        }
    },
}
module.exports = AdminController;