import {Router} from 'express';

const messagesRouter = Router();
const Vigenere = require('caesar-salad').Vigenere;

messagesRouter.post('/encode', (req, res) => {
  const { password, message } = req.body;

  if (!password || !message) {
    return res.status(400).json({ error: 'Enter both the password and the message.' });
  }

  const result = Vigenere.Cipher(password).crypt(message);
  res.json({ encoded: result });
});

messagesRouter.post('/decode', (req, res) => {
  const { password, message } = req.body;

  if (!password || !message) {
    return res.status(400).json({ error: 'Enter both the password and the message.' });
  }

  const result = Vigenere.Decipher(password).crypt(message);
  res.json({ decoded: result });
});


export default messagesRouter;