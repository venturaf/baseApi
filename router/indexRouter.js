module.exports = (router, StatusCodes) => {
  
  router.get('/', function(req, res) {
          res.status(StatusCodes.OK).json(" Welcome 🙌 Basic Api 🙌")
      });

      return router;
  }