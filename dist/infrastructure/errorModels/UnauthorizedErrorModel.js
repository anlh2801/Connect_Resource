"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpErrorModel_1 = require("./HttpErrorModel");
class Unauthorized extends HttpErrorModel_1.HttpError {
    constructor(message) {
        super(message, 401);
    }
}
exports.Unauthorized = Unauthorized;
//# sourceMappingURL=UnauthorizedErrorModel.js.map