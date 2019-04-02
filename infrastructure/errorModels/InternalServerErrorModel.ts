import {HttpError} from "./HttpErrorModel";
export class InternalServerError extends HttpError {
    constructor(message) {
        super(message, 500);
    }
}
