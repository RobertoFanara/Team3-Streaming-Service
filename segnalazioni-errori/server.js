const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const db = require('./db.js');
const authorize = require('./authorize.js')
const jwt = require('jsonwebtoken');
const {logIn, logOut} = require('./controllers/users.js')
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

app.post('/login', logIn);

// app.get('/logout', authorize, logOut)

app.get('/homepage', (req,res) => {
  //db.none(`SELECT * FROM`)
  res.send('Login avvenuto correttamente');
})

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
