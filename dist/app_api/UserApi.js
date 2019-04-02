"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserService_1 = require("../app_services/UserService");
const Wraper_1 = require("../infrastructure/utils/Wraper");
const router = express_1.default.Router();
router.get("/all", Wraper_1.wrapRequest(Wraper_1.withFirebase(UserService_1.getAllUser), false));
router.post("/add", Wraper_1.wrapRequest(Wraper_1.withFirebase(UserService_1.addUser), true));
router.post("/hello", Wraper_1.wrapRequest(UserService_1.userHello, true));
exports.routerUser = router;
//# sourceMappingURL=UserApi.js.map