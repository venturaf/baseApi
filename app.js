const bodyParser = require('body-parser');

const healthRouter = require('./router/healthRouter');
const verifyTokenRouter = require('./middleware/auth/verifyTokenMiddleware');

const { PORT } = process.env;

module.exports = (express) => {
    const app = express();
    const router = express.Router();
    const cors = require('cors');

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use("/health", healthRouter(router));
    app.use("/auth", verifyTokenRouter(router));

    app.listen(PORT, () => {
        console.log(`server running at http://localhost:${PORT}`)
    });


}