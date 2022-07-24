const fs = require("fs");
const cors = require("cors");
const express = require("express");
const app = express(); // In order to use express
const bodyParser = require("body-parser");

const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('', (req, res) => {
    fs.readFile("genres.json", function (err, data) {
      if (err) throw err;
      const genres = JSON.parse(data);
      res.send(genres);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});