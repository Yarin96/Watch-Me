const fs = require("fs");
const cors = require("cors");
const express = require("express");
const app = express(); // In order to use express

app.use(cors());
app.get('', (req, res) => {
    fs.readFile("genres.json", function (err, data) {
      if (err) throw err;
      const genres = JSON.parse(data);
      res.send(genres);
    });
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});