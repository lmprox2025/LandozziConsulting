
const express = require('express');
const cors = require('cors');

const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Servi i file statici dell'applicazione frontend (HTML, CSS, JS, immagini)
app.use(express.static(path.join(__dirname, '..')));

// Endpoint per la radice: restituisce l'index.html del frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.post('/api/contact', (req, res) => {
  const contactData = req.body;
  console.log('Richiesta contatto ricevuta:', contactData);
  res.json({ success: true, message: 'Messaggio ricevuto' });
});

app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});