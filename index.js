const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.status(200).send('<h1>Hello world !</h1>');
})

const port=8080
const host= "0.0.0.0.0"
app.listen(port,host, () => {
    console.log(`app listening on port ${port}`)
  })