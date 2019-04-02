"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = require("./firebase");
class DatabaseBehavior {
}
exports.DatabaseBehavior = DatabaseBehavior;
exports.DatabaseAdapters = [
    {
        name: 'firebase',
        handler: 'firebase',
        initDb: firebase_1.init,
        close: firebase_1.closeConnection
    },
    {
        name: 'mysql',
        handler: 'sequelize',
        initDb: () => { },
        close: () => { }
    }
];
//# sourceMappingURL=index.js.map