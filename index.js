const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const cors = require('cors');
const port = 8002;

const app = express();

app.use(cors());
app.use(express.json());

app.post('/encode', (req, res) => {
    const encode = Vigenere.Cipher(req.body.password).crypt(req.body.message);
    res.send({encoded: encode});
});

app.post('/decode', (req, res) => {
    const decode = Vigenere.Decipher(req.body.password).crypt(req.body.message);
    res.send({decoded: decode});
});

app.listen(port, () => {
    console.log('Server START on ' + port)
});