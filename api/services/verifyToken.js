const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) return res.status(401).json("Access Denied");

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);

        req.user = verified;
        next();
    } catch (err) {
        return res.status(500).json("Invalid Token");
    }
};
