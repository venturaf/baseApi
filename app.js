const bodyParser = require('body-parser');
const { StatusCodes } = require("http-status-codes");
const authMiddleware = require("./middleware/auth/authMiddleware");
const indexRouter = require('./router/indexRouter');
const healthRouter = require('./router/healthRouter');
const authRouter = require('./router/authRouter');

const { PORT } = process.env;

module.exports = (express,cookieParser,logger) => {
    const app = express();
    const router = express.Router();
    const cors = require('cors');

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    app.use("/", indexRouter(router, StatusCodes));
    app.use("/health", healthRouter(router, authMiddleware, StatusCodes));
    app.use("/auth", authRouter(router, authMiddleware, StatusCodes));

    app.listen(PORT, () => {
        console.log(`server running at http://localhost:${PORT}`)
    });


}