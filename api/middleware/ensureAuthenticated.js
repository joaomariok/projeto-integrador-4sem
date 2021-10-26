const { verify } = require("jsonwebtoken");

function ensureAuthenticated(request, response, next) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({
            errorCode: "token.invalid",
        });
    }

    const [ bearer , token ] = authToken.split(" ");

    try {
        const { subject } = verify(token, process.env.JWT_SECRET);

        request.username = subject;

        return next();
    }
    catch (err) {
        return response.status(401).json({
            errorCode: "token.expired"
        });
    }
}

module.exports = { ensureAuthenticated };