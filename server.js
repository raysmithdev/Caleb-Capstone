'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/test', (req, res) => {
  res.json({msg: "Hello"})
})

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is working!");
});
