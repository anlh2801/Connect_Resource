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
const chai_1 = require("chai");
require("mocha");
const mock_cloud_firestore_1 = __importDefault(require("mock-cloud-firestore"));
const UserService_1 = require("../app_services/UserService");
// init data for get all
const fixtureData = {
    __collection__: {
        users: {
            __doc__: {
                "1_An Le": {
                    fullName: "An Le",
                    id: 1,
                    title: "Mr"
                },
                "2_Tuy": {
                    fullName: "Huong Hoa",
                    id: 2,
                    title: "Mrs"
                },
            }
        }
    }
};
// init data for get add
const data = {
    fullName: "Momo",
    id: 3,
    title: "Ms"
};
// function addUser(firebase) {
//   return firebase.firestore.collection('users').add({ ... });
// }
// addUser(firebase);
const mockfirestore = new mock_cloud_firestore_1.default(fixtureData).firestore();
describe("Get All User Function Size", () => {
    it("should get size of users", () => __awaiter(this, void 0, void 0, function* () {
        const result = yield UserService_1.getAllUser(mockfirestore);
        chai_1.expect(result).to.have.lengthOf(2);
    }));
});
// describe("Get All User Function Type", () => {
//   it("should get type of users", async() => {
//     let result = await getAllUser(firebase);
//     expect(result).to.be.a('array');
//   });
// });
describe("Add User", () => {
    it("should get size of users after add", () => __awaiter(this, void 0, void 0, function* () {
        const beforeAdd = yield UserService_1.getAllUser(mockfirestore);
        yield UserService_1.addUser(mockfirestore, data);
        const result = yield UserService_1.getAllUser(mockfirestore);
        chai_1.expect(result).to.have.lengthOf(beforeAdd.length + 1);
    }));
});
//# sourceMappingURL=test.spec.js.map