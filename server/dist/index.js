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
var _foods = _interopRequireDefault(require("./api/foods"));
var _order = _interopRequireDefault(require("./api/order"));
var _review = _interopRequireDefault(require("./api/review"));
var _restaurant = _interopRequireDefault(require("./api/restaurant"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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

// auth/signup

zomato.use("/user", _users.default);
zomato.use("/auth", _auth.default);
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