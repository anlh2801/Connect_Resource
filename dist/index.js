"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const FileApi_1 = require("./app_api/FileApi");
const UserApi_1 = require("./app_api/UserApi");
const Authentication_1 = require("./Infrastructure/Utils/Authentication");
// Set up the express app
const app = express_1.default();
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1.default.json());
app.use(Authentication_1.auth);
app.use("/user", UserApi_1.routerUser);
app.use("/file", FileApi_1.routerFile);
const PORT = 50000;
app.listen(PORT, () => {
    console.log(`Mocha - Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map