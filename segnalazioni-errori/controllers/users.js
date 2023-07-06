const db = require("../db");
const jwt = require('jsonwebtoken');

const logIn = async (req, res) => {
    const {username, password} = req.body;

    const user = await db.one(`SELECT * FROM users WHERE username=$1`, (username));
    if (user && user.password === password){
        const payload = {
            id: user.id,
            username
        }
        const {SECRET = 'agashdgusjan'} = process.env;
        const token = jwt.sign(payload, SECRET)

        await db.none(`UPDATE users SET token=$2 WHERE id=$1`, (user.id), (token))

        res.status(200).json({id: user.id, username, token})
    } else {
        res.status(400).send('Username or password incorrect')
    }
}

module.exports = {logIn}
