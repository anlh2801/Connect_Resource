import {HttpError} from "./HttpErrorModel";
export class Unauthorized extends HttpError {
    constructor(message) {
        super(message, 401);
    }
}
