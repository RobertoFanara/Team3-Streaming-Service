const db = require("../db");
const jwt = require('jsonwebtoken');

const logIn = async (req, res) => {
    // const values = [req.body.usename, req.body.password]
    // db.query('SELECT * FROM users WHERE username = ? AND password = ?',values, (err,data) => {
    //   if (err) return res.json('Login Failed');
    //   return res.json(data);
    // });
    const { username, password } = req.body;

    const user = await db.one(`SELECT * FROM users WHERE username=$1`, [(username)]);
    if (user && user.password === password) {
        const payload = {
            id: user.id,
            username
        };
        const { SECRET = 'agashdgusjan' } = process.env;
        const token = jwt.sign(payload, SECRET);

        await db.none(`UPDATE users SET token=$2 WHERE id=$1`, [(user.id), (token)]);
        res.redirect('/homepage');
    } else {
        res.status(400).send('Username or password incorrect');
    }
}

const logOut = async (req, res) => {
    const user = req.user;
    await db.none(`UPDATE users SET token=$2 WHERE id=$1`, [(user?.id), (null)]);
    res.status(200).send('Logout avvenuto con successo')
}

module.exports = { logIn, logOut }
