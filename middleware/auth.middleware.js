const jwt = require('jsonwebtoken');
require('dotenv/config')
const authmiddleware = {
    verifytoken: (req, res, next) => {
        const token = req.headers['x-access-token'];
        if (!token) {return res.status(401).json({ message: 'tidak ada token' })}
        try {
            const decode = jwt.verify(token, process.env.JWT_KEY);
            req.userid = decode.id
        } catch (error) {
            return res.status(401).json({ message: 'tidak ada token' })

        }
        next()

    }

}

module.exports = {
    isUser: async (req, res, next) => {
        const user = await User.findById(req.userId);

        if (user.role === "true" || user.role === "false") return next();

        res.status(403).send({message: "Unauthorized!"});
    }
}

module.exports = authmiddleware;
//middelware  merupakan penyedia mekanisme penyaringan http requuest yang masuk ke aplikasi dengan kat lain setiap ada request yang masuk maka akan di flter oleh middleware.
