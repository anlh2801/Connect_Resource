import bodyParser from "body-parser";
import express from "express";
import {routerFile} from "./app_api/FileApi";
import {routerUser} from "./app_api/UserApi";
import {auth} from "./Infrastructure/Utils/Authentication";

// Set up the express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(auth);

app.use("/user", routerUser);

app.use("/file", routerFile);

const PORT = 50000;

app.listen(PORT, () => {
  console.log(`Mocha - Server running on port ${PORT}`);
});
