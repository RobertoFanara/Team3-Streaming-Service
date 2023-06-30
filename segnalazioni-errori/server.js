const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
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

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
