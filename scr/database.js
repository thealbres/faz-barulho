import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.db");

const setupDatabase = async () => {
    // db.transaction(tx => {
    //     tx.executeSql(
    //         'drop table items',
    //         [],
    //     )
    // })
    db.transaction((tx) => {
        tx.executeSql(
            "create table if not exists items (id integer primary key not null, name text, loudness text, soundLevel text, color text);"
        );
    });

}
export const database = {
    setupDatabase,
}