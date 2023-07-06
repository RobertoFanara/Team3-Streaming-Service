const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const db = require('./db.js');
const jwt = require('jsonwebtoken');
const logIn = require('./controllers/users.js')
const app = express();
const port = 3000;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'team3.fs11@gmail.com',
    pass: 'dwxgglqbqfeevbkb'
  }
});
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/segnalazione', (req, res) => {
  const { problema } = req.body;

  const mailOptions = {
    from: 'paologallitelli05@gmail.com',
    to: 'team3.fs11@gmail.com',
    subject: 'Segnalazione di un problema',
    text: problema
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Errore durante l\'invio dell\'email:', error);
      res.status(500).send('Si è verificato un errore durante l\'invio della segnalazione.');
    } else {
      console.log('Segnalazione inviata:', problema);
      res.status(200).send('Segnalazione inviata con successo!');
    }
  });
});

// app.post('/login', logIn);

app.post('/login', async (req, res) => {
  // const values = [req.body.usename, req.body.password]
  // db.query('SELECT * FROM users WHERE username = ? AND password = ?',values, (err,data) => {
  //   if (err) return res.json('Login Failed');
  //   return res.json(data);
  // });
  const {username, password} = req.body;

  const user = await db.one(`SELECT * FROM users WHERE username=$1`, [(username)]);
  if (user && user.password === password){
      const payload = {
          id: user.id,
          username
      };
      const {SECRET = 'agashdgusjan'} = process.env;
      const token = jwt.sign(payload, SECRET);

      await db.none(`UPDATE users SET token=$2 WHERE id=$1`, [(user.id), (token)]);
      res.redirect('/homepage');
  } else {
      res.status(400).send('Username or password incorrect');
  }
});

app.get('/homepage', (req,res) => {
  res.send('welcome to favelas');
})

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
