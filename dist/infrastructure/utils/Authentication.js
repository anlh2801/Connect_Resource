"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getToken() {
    return Math.round(new Date().getTime() / (3 * 60 * 1000));
}
exports.getToken = getToken;
function auth(req, res, next) {
    console.log("Client tocken: " + req.headers.tocken + " ===== " + "Server tocken: " + getToken());
    if (req.headers.tocken == getToken()) {
        console.log("Authenticate successfully");
        req.headers.user = "User";
    }
    else {
        req.headers.user = null;
    }
    next();
}
exports.auth = auth;
//# sourceMappingURL=Authentication.js.map