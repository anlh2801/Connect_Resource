import { expect } from "chai";
import "mocha";
import MockFirebase from "mock-cloud-firestore";
import { addUser, getAllUser } from "../app_services/UserService";

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
const mockfirestore = new MockFirebase(fixtureData).firestore();

describe("Get All User Function Size", () => {

  it("should get size of users", async () => {
    const result = await getAllUser(mockfirestore);
    expect(result).to.have.lengthOf(2);
  });

});

// describe("Get All User Function Type", () => {

//   it("should get type of users", async() => {
//     let result = await getAllUser(firebase);
//     expect(result).to.be.a('array');
//   });

// });

describe("Add User", () => {

  it("should get size of users after add", async () => {
    const beforeAdd = await getAllUser(mockfirestore);
    await addUser(mockfirestore, data);
    const result = await getAllUser(mockfirestore);
    expect(result).to.have.lengthOf(beforeAdd.length + 1);
  });

});
