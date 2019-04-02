"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addUser(fbApp, req) {
    try {
        const context = fbApp.firestore();
        let data = req.body;
        const docRef = context.collection("users").doc(data.id + "_" + data.fullName);
        docRef.set(data);
        return true;
    }
    catch (ex) {
        console.log(ex);
        return false;
    }
}
exports.addUser = addUser;
function getAllUser(fbApp) {
    const context = fbApp.firestore();
    return context.collection("users").get().then((snapshot) => {
        const result = [];
        snapshot.forEach((doc) => {
            result.push(doc.data());
        });
        return result;
    })
        .catch((err) => {
        console.log("Error getting documents", err);
    });
}
exports.getAllUser = getAllUser;
function userHello(req) {
    console.log(`user hello ${JSON.stringify(req.body)}`);
    return true;
}
exports.userHello = userHello;
//# sourceMappingURL=UserService.js.map