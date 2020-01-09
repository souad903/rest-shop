const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.use((req, res, next) => {
  res.status(200).json({ message: 'It works' });
});

app.listen(port);
