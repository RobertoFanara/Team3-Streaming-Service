const pgPromise = require("pg-promise");

const pgp = pgPromise()
const db = pgp("postgres://postgres:Mitico1!@localhost:5432/stream-3")

const setupDb = async () => {
    await db.none(`
        DROP TABLE IF EXISTS users;

        CREATE TABLE users (
            id SERIAL NOT NULL PRIMARY KEY,
            username TEXT NOT NULL,
            password TEXT NOT NULL,
            token TEXT
        );
    `)

    await db.none(`INSERT INTO users (username, password) VALUES ('stream3', 'team3')`);
    await db.none(`INSERT INTO users (username, password) VALUES ('alfio', '12345')`);

    const user = await db.one(`SELECT * FROM users WHERE username='stream3'`);
    console.log(user)
}

setupDb().catch(err => console.error(err));

module.exports = db;