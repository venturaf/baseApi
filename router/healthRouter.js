module.exports = (router, auth, StatusCodes) => {
router.get('/', function(req, res) {
        res.status(StatusCodes.OK).json("I'M UP AND RUNNING")
    });

    router.get('/welcome', auth, function(req, res) {
        res.status(StatusCodes.OK).send(" Welcome 🙌 ");
    });

    return router;
}