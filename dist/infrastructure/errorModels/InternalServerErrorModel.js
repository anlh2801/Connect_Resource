"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpErrorModel_1 = require("./HttpErrorModel");
class InternalServerError extends HttpErrorModel_1.HttpError {
    constructor(message) {
        super(message, 500);
    }
}
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=InternalServerErrorModel.js.map