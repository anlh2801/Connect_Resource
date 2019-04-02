"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = __importDefault(require("uuid"));
const HttpErrorModel_1 = require("../errorModels/HttpErrorModel");
const InternalServerErrorModel_1 = require("../errorModels/InternalServerErrorModel");
const UnauthorizedErrorModel_1 = require("../errorModels/UnauthorizedErrorModel");
const databaseAdapter_1 = require("../databaseAdapter");
const ResponeModel_1 = require("./ResponeModel");
function wrapRequest(op, needAuth) {
    return (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            if (req.headers && !req.headers.user && needAuth) {
                console.log("Unauthorized user");
                throw new UnauthorizedErrorModel_1.Unauthorized("Unauthorized user from client");
            }
            console.log(`User logged in as ${req.headers.user}`);
            const result = yield op(req);
            console.log("Result: " + result);
            const resOk = ResponeModel_1.buildResOKAllType(result);
            res.status(resOk.status).send(resOk.data);
        }
        catch (ex) {
            let error = null;
            const uid = uuid_1.default();
            if (ex instanceof HttpErrorModel_1.HttpError) {
                error = ex;
            }
            else {
                error = new InternalServerErrorModel_1.InternalServerError(`Unexpected Exception: ${ex.message}, please look at the log id ${uid}`);
                console.log(`ErrorId: ${uid}, info: ${ex.stack}`);
            }
            res.status(error.code).send({ message: error.message, stack: error.stack });
        }
    });
}
exports.wrapRequest = wrapRequest;
function getDbAdapter(name, handler) {
    const db = databaseAdapter_1.DatabaseAdapters.find(x => x.name === name && x.handler === handler);
    if (!db) {
        throw new Error(`Cannot find selected database adapter ${name}`);
    }
    return db;
}
function processOpWithDb(db, op, req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbInstance = yield db.initDb();
            return yield op(dbInstance, req);
        }
        finally {
            yield db.close();
        }
    });
}
exports.processOpWithDb = processOpWithDb;
function withFirebase(op) {
    const db = getDbAdapter('firebase', 'firebase');
    return (req) => __awaiter(this, void 0, void 0, function* () {
        return yield processOpWithDb(db, op, req);
    });
}
exports.withFirebase = withFirebase;
//# sourceMappingURL=Wraper.js.map