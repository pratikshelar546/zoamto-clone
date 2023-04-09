"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _connection = _interopRequireDefault(require("./database/connection"));
var _auth = _interopRequireDefault(require("./api/auth"));
var _passport = _interopRequireDefault(require("passport"));
var _route = _interopRequireDefault(require("./config/route.config"));
var _google = _interopRequireDefault(require("./config/google.config"));
var _expressSession = _interopRequireDefault(require("express-session"));
var _users = _interopRequireDefault(require("./api/users"));
var _menu = _interopRequireDefault(require("./api/menu"));
var _foods = _interopRequireDefault(require("./api/foods"));
var _order = _interopRequireDefault(require("./api/order"));
var _review = _interopRequireDefault(require("./api/review"));
var _restaurant = _interopRequireDefault(require("./api/restaurant"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// const cors=require("cors");

_dotenv.default.config();
const zomato = (0, _express.default)();
(0, _route.default)(_passport.default);
(0, _google.default)(_passport.default);
zomato.use(_express.default.json());
zomato.use((0, _expressSession.default)({
  secret: "zomatoApp"
}));
zomato.use(_passport.default.initialize());
zomato.use(_passport.default.session());
zomato.get("/", (req, res) => {
  res.json({
    message: "server is running.."
  });
});
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
};
zomato.use((0, _cors.default)(corsOptions));

// auth/signup
// zomato.use('/uploads',express.static('uploads'))
// zomato.use(express.urlencoded({ extended: true }));
// zomato.use(fileUpload())
zomato.use(_bodyParser.default.json());
zomato.use('/uploads', _express.default.static('uploads'));
zomato.use("/user", _users.default);
zomato.use("/auth", _auth.default);
zomato.use("/menu", _menu.default);
zomato.use("/restaurant", _restaurant.default);
zomato.use("/food", _foods.default);
zomato.use("/order", _order.default);
zomato.use("/review", _review.default);
const PORT = 8081;
zomato.listen(PORT, () => {
  (0, _connection.default)().then(() => {
    console.log("Server is running !!!");
  }).catch(error => {
    console.log("Server is running, but database connection failed...");
    console.log(error);
  });
});