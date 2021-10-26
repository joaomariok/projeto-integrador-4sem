// const { verify } = require("jsonwebtoken");

function ensureAuthenticated(request, response, next) {
    const authToken = request.headers.authorization;

    console.log(authToken);

    if (!authToken) {
        return response.status(401).json({
            errorCode: "token.invalid",
        });
    }

    // Bearer no_token

    const [ , token ] = authToken.split(" ");

    try {
        // const { sub } = verify(token, process.env.JWT_SECRET);

        // request.user_id = sub;

        return next();
    }
    catch (err) {
        return response.status(401).json({
            errorCode: "token.expired"
        });
    }
}

module.exports = { ensureAuthenticated };