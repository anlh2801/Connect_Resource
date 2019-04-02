import express from "express";
import {addUser, getAllUser, userHello} from "../app_services/UserService";
import {wrapRequest, withFirebase} from "../infrastructure/utils/Wraper";

const router = express.Router();

router.get("/all", wrapRequest(withFirebase(getAllUser), false));

router.post("/add", wrapRequest(withFirebase(addUser), true));

router.post("/hello", wrapRequest(userHello, true));

export const routerUser = router;
