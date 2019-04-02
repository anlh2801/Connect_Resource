import express from "express";
import {readFileData, readFileDataSync, responeFileData, uploadFile} from "../infrastructure/utils/FileProcessing";
import {wrapRequest} from "../infrastructure/utils/Wraper";

const router = express.Router();

router.post("/upload", uploadFile("data"), wrapRequest(responeFileData, false));

router.get("/read", wrapRequest(readFileData, false));

router.get("/read_sync", wrapRequest(readFileDataSync, false));

export const routerFile = router;
