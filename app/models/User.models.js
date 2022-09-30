const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs')
const User = mongoose.Schema({
    namaUser: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

// user,admin
// kalau user dia bisa crud data tapi belum valid
// admin bisa crud valid dan bisa validasi data dari user



User.pre("save", async function(next) {
    if (!this.isModified("password")) return next
    try {
        const salt = await bcryptjs.genSalt(10)
        this.password = await bcryptjs.hash(this.password, salt)
    } catch (error) {
        return next(error) //melanjutkan proses
    }

})

User.pre("findOneAndUpdate", async function(next) {
    try {
        if (this._update.$set.password) {
            const salt = await bcryptjs.genSalt(10) ///(10)=work factor(memiliki fungsi matematis pada pengubahan pasword yang telah di proses salt)
            this._update.$set.password = await bcryptjs.hash(this._update.$set.password, salt) //has=> menampilakan enskripsi
                //random gensalt=> merupakan pengubahan enskripsi agar tidak terjadi kesamaan pada enskripsi yang lain meski pasword awalanya sama.
        }
        next()
    } catch (error) {
        return next(error)
    }

})

User.methods.validasipassword = async function(data) {
    return bcryptjs.compare(data, this.password)
}

module.exports = mongoose.model('User', User);