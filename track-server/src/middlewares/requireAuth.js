const jwt = require('jsonwebtoken');
const User = require('../models/User');
module.exports = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "you must be loged in." });
    }
    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'this', async (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "you must be loged in." });
        }
        try {
            const { userId } = payload;
            const user = await User.findById(userId);
            req.user=user;
            next();
        }
        catch (err) {
            return res.status(401).json({error:"you must be loged in: 'user not found' "});
        }

    })
}