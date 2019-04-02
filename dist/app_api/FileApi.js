"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const FileProcessing_1 = require("../infrastructure/utils/FileProcessing");
const Wraper_1 = require("../infrastructure/utils/Wraper");
const router = express_1.default.Router();
router.post("/upload", FileProcessing_1.uploadFile("data"), Wraper_1.wrapRequest(FileProcessing_1.responeFileData, false));
router.get("/read", Wraper_1.wrapRequest(FileProcessing_1.readFileData, false));
router.get("/read_sync", Wraper_1.wrapRequest(FileProcessing_1.readFileDataSync, false));
exports.routerFile = router;
//# sourceMappingURL=FileApi.js.map