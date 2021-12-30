const jwt = require("jsonwebtoken");

module.exports = (router, auth, StatusCodes) => {

    router.get('/verifyToken', auth, function(req, res, next) {
        console.log(`Entering ${req.originalUrl}`);
        res.status(StatusCodes.OK).json(`Successful execution of ${req.originalUrl}`);
        console.log(`Successful execution of ${req.originalUrl}`);
        console.log(`Finalizing ${req.originalUrl}`);
        return;
    });

    router.get('/createToken', function(req, res, next) {
        console.log(`Entering ${req.originalUrl}`);
        const token = jwt.sign({ foo: 'bar' },
            process.env.TOKEN_KEY, {
                expiresIn: "2h",
            }
        );
        console.log("TOKEN: " + token);
        data = {token: token,
        message: `Successful execution of ${req.originalUrl}`}
        res.status(StatusCodes.OK).json(data);
        console.log(`Successful execution of execution of ${req.originalUrl}`);
        console.log(`Finalizing ${req.originalUrl}`);
        return;
    });

    return router;
}