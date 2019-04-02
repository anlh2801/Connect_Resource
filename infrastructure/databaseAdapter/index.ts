import {init as initFirebase, closeConnection as closeFirebase} from './firebase'

export class DatabaseBehavior {
    name: DatabaseProvider
    handler: DatabaseHandler
    initDb: () => any
    close: () => any
}

export type DatabaseProvider = 'firebase'|'mysql'

export type DatabaseHandler = 'sequelize'|'firebase'

export const DatabaseAdapters: DatabaseBehavior[] = [
    {
        name: 'firebase',
        handler: 'firebase',
        initDb: initFirebase,
        close: closeFirebase
    },
    {
        name: 'mysql',
        handler: 'sequelize',
        initDb: ()=> {},
        close: () => {}
    }
]

