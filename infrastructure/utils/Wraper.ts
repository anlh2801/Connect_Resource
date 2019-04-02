import uuid from "uuid";
import {HttpError} from "../errorModels/HttpErrorModel";
import {InternalServerError} from "../errorModels/InternalServerErrorModel";
import {Unauthorized} from "../errorModels/UnauthorizedErrorModel";
import {DatabaseAdapters, DatabaseBehavior, DatabaseHandler, DatabaseProvider} from "../databaseAdapter";

import {buildResOKAllType} from "./ResponeModel";

export function wrapRequest(op, needAuth) {
    return async (req, res) => {
        try {
            if (req.headers && !req.headers.user && needAuth) {
                console.log("Unauthorized user");
                throw new Unauthorized("Unauthorized user from client");
            }
            console.log(`User logged in as ${req.headers.user}`);
            const result = await op(req);
            console.log("Result: " + result);
            const resOk = buildResOKAllType(result);

            res.status(resOk.status).send(resOk.data);
        } catch (ex) {
            let error = null;
            const uid = uuid();
            if (ex instanceof HttpError) {
                error = ex;
            } else {
                error = new InternalServerError(`Unexpected Exception: ${ex.message}, please look at the log id ${uid}`);
                console.log(`ErrorId: ${uid}, info: ${ex.stack}`);
            }
            res.status(error.code).send({message: error.message, stack: error.stack});
        } 
    };
}

function getDbAdapter(name: DatabaseProvider, handler: DatabaseHandler): DatabaseBehavior {
    const db: DatabaseBehavior = DatabaseAdapters.find(x => x.name === name && x.handler === handler)
    if(!db){
        throw new Error(`Cannot find selected database adapter ${name}`)
    }
    return db
}

export async function processOpWithDb(db: DatabaseBehavior, op, req) {
    try{
        const dbInstance = await db.initDb()
        return await op(dbInstance, req)
    } finally {
        await db.close()
    }
}

export function withFirebase(op) {
    const db = getDbAdapter('firebase', 'firebase') 
    return async (req) => {
        return await processOpWithDb(db, op, req)
    }

    
}
